import { Activity, CloudEnvironment, Credentials, IToken, PUBLIC } from '@microsoft/teams.api';
import { ConsoleLogger, EventEmitter, IEventEmitter, ILogger } from '@microsoft/teams.common';

import { HttpMethod, HttpRouteHandler, IHttpServerAdapter, IHttpServerInitializeDeps, IHttpServerRequest } from '../http/adapter';
import { IAppTokenProvider } from '../token-provider';

import {
  buildAckReplyFrame,
  buildInvokeReplyFrame,
  isInvokeEnvelope,
  readEnvelopeActivity,
  readField,
  replyFrameBase,
} from './envelope';
import { NegotiateError } from './negotiate';
import { SignalRSocketConnection } from './socket-connection';
import {
  DEFAULT_SOCKET_MODE_NEGOTIATE_BASE_URL,
  ISocketConnection,
  ReplyFrame,
  SocketActivityEnvelope,
  SocketConnectionHandlers,
  SocketReadyFrame,
  SOCKET_MODE_NEGOTIATE_PATH,
  SOCKET_MODE_PROTOCOL_VERSION,
  SocketModeOptions,
  SocketModeStatus,
} from './types';

const DEFAULT_READINESS_TIMEOUT_MS = 30_000;
const DEFAULT_STARTUP_TIMEOUT_MS = 30_000;
const DEFAULT_KEEPALIVE_INTERVAL_MS = 15_000;
const DEFAULT_SERVER_TIMEOUT_MS = 30_000;

/** Reconnect back-off bounds: capped exponential with full jitter. */
const RECONNECT_INITIAL_DELAY_MS = 1_000;
const RECONNECT_MAX_DELAY_MS = 15_000;

/** Renegotiate this long before the negotiate token is due to expire. */
const TOKEN_REFRESH_MARGIN_MS = 60_000;

/**
 * Default geographies a bot connects to. One socket is opened per geo (the geo
 * is appended as a path segment to the negotiate base), so a single bot has
 * inbound coverage across regions rather than only the geo it happened to dial.
 */
const DEFAULT_GEOS = ['amer', 'emea', 'apac'] as const;

/** Extract a service-provided Retry-After (ms) from a negotiate failure. */
function retryAfterFrom(error: unknown): number | undefined {
  return error instanceof NegotiateError ? error.retryAfterMs : undefined;
}

/** Join a base URL, an optional geo segment, and the negotiate path. */
function buildNegotiateUrl(base: string, geo: string): string {
  const trimmedBase = base.replace(/\/+$/, '');
  const seg = geo.trim().replace(/^\/+|\/+$/g, '');
  return seg ? `${trimmedBase}/${seg}${SOCKET_MODE_NEGOTIATE_PATH}` : `${trimmedBase}${SOCKET_MODE_NEGOTIATE_PATH}`;
}

/**
 * Lifecycle events emitted by {@link SocketModeAdapter.events}. Subscribe via
 * `app.socketMode?.events.on('ready', ...)` to observe the socket lifecycle.
 * Each payload carries the `geo` it relates to, since a bot maintains one
 * connection per geo.
 *
 * @experimental This API is in preview and may change in the future.
 */
export type SocketModeEvents = {
  /** A geo's socket connected and Teams backend service confirmed readiness. */
  ready: { geo: string; frame: SocketReadyFrame };
  /** A geo's socket dropped; a reconnect for that geo may be in progress. */
  disconnected: { geo: string; error?: Error };
  /** A geo's socket reconnected and re-established its Teams backend service group. */
  reconnected: { geo: string };
};

/**
 * Dependencies the owning {@link App} supplies to the socket adapter, wired
 * internally rather than by the developer. Like {@link HttpServer}, credentials
 * arrive via {@link SocketModeAdapter.initialize} and token acquisition goes
 * through the app's {@link IAppTokenProvider} — no per-value function callbacks.
 */
export type SocketModeAdapterDeps = {
  /**
   * Token source for the Bot Framework token that authenticates the Teams backend service
   * negotiate call, reusing the app's credentials.
   */
  readonly tokenProvider: IAppTokenProvider;
  /**
   * The messaging endpoint path the owning {@link HttpServer} registers its
   * inbound-activity route on. Inbound socket frames are dispatched to the
   * handler registered for this path; {@link SocketModeAdapter.registerRoute}
   * calls for any other path (e.g. `app.function()` routes) are no-ops, since a
   * socket transport serves only messaging.
   */
  readonly messagingEndpoint: string;
  /**
   * Whether Socket Mode is the app's sole inbound transport (no HTTP fallback).
   * When `true`, browser-oriented calls (`app.function()`/`app.tab()`) have no
   * transport at all, so {@link SocketModeAdapter.registerRoute} for a
   * non-messaging path and {@link SocketModeAdapter.serveStatic} warn (they are
   * still no-ops). When `false` the sibling HTTP adapter in the composite serves
   * those, so they are logged only at debug.
   */
  readonly soleTransport: boolean;
  /**
   * Surface an unexpected inbound-processing error to the app pipeline. May be
   * async — the transport awaits it (behind an error boundary) so an
   * `App.onError` that performs async work (logging, telemetry flush) completes
   * before the reply frame is returned.
   */
  readonly onError?: (error: Error) => void | Promise<void>;
  /** Logger to use; defaults to a `SocketModeAdapter`-tagged console logger. */
  readonly logger?: ILogger;
};

/**
 * Inbound Socket Mode transport, implemented as an {@link IHttpServerAdapter}.
 *
 * With `new App({ socketMode: true })` the app receives activities over a
 * Teams backend service-negotiated Azure SignalR socket. Rather than being a
 * separate server, Socket Mode plugs in as an adapter *inside* the app's single
 * {@link HttpServer}: {@link registerRoute} captures the messaging-endpoint
 * handler and every inbound socket frame is dispatched into it, so the socket
 * shares the exact same Teams pipeline as HTTP. Only inbound delivery moves to
 * the socket; outbound sends stay on HTTP and handlers stay transport-agnostic.
 *
 * No HTTP is used outside the negotiate handshake — no routes served or
 * per-request JWT. The socket is authenticated once at negotiate, so the adapter
 * synthesizes the {@link IToken} the pipeline expects and delivers it as the
 * request's pre-authenticated {@link IHttpServerRequest.token} (HttpServer then
 * skips JWT validation). Invoke activities return a real invoke response over
 * SignalR client results; one-way activities return a post-handler ack. Not
 * usable until Teams backend service's `SocketReady` frame arrives.
 *
 * Browser-oriented calls are no-ops: {@link serveStatic} and non-messaging
 * {@link registerRoute} paths (e.g. `app.function()`) require an HTTP transport.
 *
 * @experimental This API is in preview and may change in the future.
 */
export class SocketModeAdapter implements IHttpServerAdapter {
  /**
   * Lifecycle event surface for observing the socket without reaching into the
   * transport. Emits `ready`, `disconnected`, and `reconnected`.
   */
  readonly events: IEventEmitter<SocketModeEvents> = new EventEmitter<SocketModeEvents>();

  private readonly log: ILogger;
  private _lifecycle: 'idle' | 'starting' | 'started' | 'stopped' = 'idle';
  private credentials?: Credentials;
  private cloud?: CloudEnvironment;

  /**
   * Handler registered for the messaging endpoint; inbound socket frames are
   * dispatched into it. Set by {@link registerRoute} (called by the owning
   * {@link HttpServer} when it registers its inbound-activity route).
   */
  private messagingHandler?: HttpRouteHandler;

  /** One independent supervised connection per geo. */
  private geos: GeoSocket[] = [];

  /** Aborts all in-flight negotiate/connect/back-off waits when stopping. */
  private abort?: AbortController;
  private stopped = false;

  constructor(
    readonly options: SocketModeOptions = {},
    private readonly deps: SocketModeAdapterDeps
  ) {
    this.log = deps.logger ?? new ConsoleLogger('SocketModeAdapter');
  }

  /**
   * Aggregate lifecycle status across all geo connections. `ready` means every
   * geo is ready; `connecting` while any geo is still (re)connecting and none is
   * mid-drop; `disconnected` when at least one geo has dropped and is recovering.
   */
  get status(): SocketModeStatus {
    if (this._lifecycle === 'idle') return 'idle';
    if (this._lifecycle === 'stopped') return 'stopped';
    const states = this.geos.map((g) => g.status);
    if (states.length > 0 && states.every((s) => s === 'ready')) return 'ready';
    if (states.some((s) => s === 'disconnected')) return 'disconnected';
    return 'connecting';
  }

  /** Per-geo status snapshot, for diagnostics/observability. */
  get geoStatuses(): ReadonlyArray<{ geo: string; status: SocketModeStatus }> {
    return this.geos.map((g) => ({ geo: g.geo, status: g.status }));
  }

  /** The geos this server connects to (resolved from options/defaults). */
  get geoList(): readonly string[] {
    return this.resolveGeos();
  }

  /**
   * Resolved negotiate URL for the first geo (`{base}/{geo}/v3/websockets/connect`).
   * Primarily for diagnostics; each geo has its own URL.
   */
  get negotiateUrl(): string {
    const geos = this.resolveGeos();
    return buildNegotiateUrl(this.negotiateBase, geos[0] ?? '');
  }

  /** Base negotiate URL (no geo segment, no path). */
  private get negotiateBase(): string {
    return this.options.negotiateBaseUrl ?? DEFAULT_SOCKET_MODE_NEGOTIATE_BASE_URL;
  }

  /**
   * {@link IHttpServerAdapter} seam initialization: receive the app-level
   * credentials/cloud. Called by {@link HttpServer.initialize}, which forwards
   * the deps it gets from {@link App.initialize} (directly in socket-only mode,
   * or via the {@link CompositeAdapter} when the HTTP fallback is on). Stores
   * credentials (the bot id echoed on reply frames derives from them); the
   * negotiate token is acquired lazily in {@link start}.
   */
  async initialize(deps: IHttpServerInitializeDeps): Promise<void> {
    this.credentials = deps.credentials;
    this.cloud = deps.cloud;
  }

  /**
   * {@link IHttpServerAdapter} route registration. The owning {@link HttpServer}
   * registers its inbound-activity route here; the adapter captures the handler
   * for its configured messaging endpoint and dispatches inbound socket frames
   * into it. Any other path (e.g. `app.function()` POST routes) is a no-op —
   * a socket transport serves only messaging. When Socket Mode is the sole
   * transport this is warned (the feature has no transport); with the HTTP
   * fallback on, the sibling HTTP adapter serves it, so it's only debug-logged.
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    if (method === 'POST' && path === this.deps.messagingEndpoint) {
      this.messagingHandler = handler;
      return;
    }
    const message =
      `socket-mode: ignoring ${method} ${path} — Socket Mode serves only the messaging endpoint. ` +
      'Browser features (app.function()/app.tab()) need the HTTP transport; enable it with ' +
      'socketMode.fallbackToHttp (the default).';
    if (this.deps.soleTransport) {
      this.log.warn(message);
    } else {
      this.log.debug(message);
    }
  }

  /**
   * {@link IHttpServerAdapter} static-file serving. No-op for Socket Mode — tabs
   * and other static assets require an HTTP transport. Warned when Socket Mode is
   * the sole transport (the feature has no transport), else debug-logged (the
   * sibling HTTP adapter serves it).
   */
  serveStatic(path: string, _directory: string): void {
    const message =
      `socket-mode: ignoring serveStatic(${path}) — Socket Mode has no HTTP transport for static ` +
      'files (app.tab()). Enable the HTTP transport with socketMode.fallbackToHttp (the default).';
    if (this.deps.soleTransport) {
      this.log.warn(message);
    } else {
      this.log.debug(message);
    }
  }

  /**
   * {@link IHttpServerAdapter} lifecycle: open one socket per geo, resolving only
   * once every geo's readiness contract is satisfied. Called by {@link App.start}
   * via {@link HttpServer.start}. The `port` argument is unused — Socket Mode
   * dials out rather than listening.
   *
   * The initial connect for each geo is retried up to `startupTimeoutMs` before
   * `App.start()` rejects; once all geos are ready, each geo's supervisor keeps
   * it alive across drops and token expiry independently until {@link stop}.
   */
  async start(_port?: number | string): Promise<void> {
    this.assertCloudSupported();
    this.stopped = false;
    this._lifecycle = 'starting';
    this.abort = new AbortController();

    const geos = this.resolveGeos();
    this.geos = geos.map(
      (geo) => new GeoSocket(this, geo, buildNegotiateUrl(this.negotiateBase, geo), this.log)
    );
    this.log.info(
      `socket-mode: connecting to Socket Mode across ${geos.length} geo(s): ${geos.join(', ')}`
    );

    // Every geo must establish its first connection for start to succeed; a geo
    // that can't connect within the startup budget fails App.start(), which then
    // tears everything down. Post-startup drops are handled per-geo by supervisors.
    try {
      await Promise.all(this.geos.map((g) => g.startInitial()));
    } catch (err) {
      await this.stop();
      throw err;
    }

    this._lifecycle = 'started';
    this.log.info('socket-mode: Socket Mode ready (inbound activities over WebSocket)');
    for (const g of this.geos) g.superviseInBackground();
  }

  /**
   * {@link IHttpServerAdapter} lifecycle: stop admitting activities, abort any
   * reconnect/back-off in progress, then close every geo's socket. In-flight
   * handlers are not awaited: any activity whose reply doesn't make it out before
   * shutdown is redelivered by the Teams backend to another connection/instance.
   */
  async stop(): Promise<void> {
    if (this.stopped) return;
    this.stopped = true;
    this._lifecycle = 'stopped';
    this.log.info('socket-mode: stopping Socket Mode');

    this.abort?.abort();

    await Promise.all(this.geos.map((g) => g.stop().catch(() => undefined)));
  }

  /** True while the server is up and admitting (used by geo dispatch fences). */
  get accepting(): boolean {
    return !this.stopped;
  }

  /** Shared abort signal for all geo supervisors. */
  get abortSignal(): AbortSignal | undefined {
    return this.abort?.signal;
  }

  /** Build a connection for a geo (used by {@link GeoSocket}). */
  createConnection(negotiateUrl: string, handlers: SocketConnectionHandlers): ISocketConnection {
    return new SignalRSocketConnection(
      {
        negotiateUrl,
        getBotToken: () => this.acquireBotToken(),
        readinessTimeoutMs: this.options.readinessTimeoutMs ?? DEFAULT_READINESS_TIMEOUT_MS,
        keepAliveIntervalMs: this.options.keepAliveIntervalMs ?? DEFAULT_KEEPALIVE_INTERVAL_MS,
        serverTimeoutMs: this.options.serverTimeoutMs ?? DEFAULT_SERVER_TIMEOUT_MS,
      },
      handlers,
      this.log
    );
  }

  /** Back-off delay (ms) for a reconnect attempt (shared policy across geos). */
  backoffDelay(attempt: number): number {
    const schedule = this.options.reconnectDelaysMs;
    if (schedule && schedule.length > 0) {
      return schedule[Math.min(attempt, schedule.length - 1)];
    }
    const capped = Math.min(RECONNECT_INITIAL_DELAY_MS * 2 ** attempt, RECONNECT_MAX_DELAY_MS);
    return Math.floor(Math.random() * capped); // full jitter
  }

  /** Abortable delay; resolves `true` when it completed, `false` if aborted. */
  sleep(ms: number): Promise<boolean> {
    if (ms <= 0) return Promise.resolve(true);
    return new Promise<boolean>((resolve) => {
      const signal = this.abort?.signal;
      if (signal?.aborted) {
        resolve(false);
        return;
      }
      const timer = setTimeout(() => {
        signal?.removeEventListener('abort', onAbort);
        resolve(true);
      }, ms);
      const onAbort = () => {
        clearTimeout(timer);
        resolve(false);
      };
      signal?.addEventListener('abort', onAbort, { once: true });
    });
  }

  /** The startup budget deadline helper for a geo's initial connect. */
  get startupTimeoutMs(): number {
    return this.options.startupTimeoutMs ?? DEFAULT_STARTUP_TIMEOUT_MS;
  }

  /** Token-refresh margin/timeout accessor for geo supervisors. */
  get tokenRefreshMarginMs(): number {
    return TOKEN_REFRESH_MARGIN_MS;
  }

  retryAfterOf(error: unknown): number | undefined {
    return retryAfterFrom(error);
  }

  /** Emit a lifecycle event without letting a throwing listener break state. */
  emit<K extends keyof SocketModeEvents>(event: K, payload: SocketModeEvents[K]): void {
    try {
      this.events.emit(event, payload);
    } catch (err) {
      this.log.warn(`socket-mode: a '${String(event)}' event listener threw`, err);
    }
  }

  /**
   * Dispatch one inbound envelope behind the per-geo state fence (only the
   * current, ready generation of that geo may run, never once stopped). There is
   * no concurrency cap or admission queue: SignalR already invokes the handler
   * per activity, the Teams backend load-balances delivery across
   * connections/instances, and each activity carries a reply deadline, so an
   * in-SDK cap would mostly produce work whose reply is discarded.
   */
  async dispatch(geo: GeoSocket, gen: number, envelope: SocketActivityEnvelope): Promise<ReplyFrame | undefined> {
    if (!geo.canDispatch(gen)) {
      this.log.debug('socket-mode: dropping activity received outside the active connection state');
      return undefined;
    }

    return await this.handleEnvelope(envelope);
  }

  /**
   * Reject Socket Mode in a sovereign cloud unless the caller supplied an
   * explicit negotiate endpoint. The default negotiate host targets the public
   * commercial cloud, so silently using it from a sovereign cloud would cross a
   * data boundary and present a token with the wrong audience.
   */
  private assertCloudSupported(): void {
    if (this.options.negotiateBaseUrl) return; // explicit endpoint overrides the gate
    const cloud = this.cloud;
    if (!cloud || cloud.tokenIssuer === PUBLIC.tokenIssuer) return;
    throw new Error(
      `Socket Mode is not supported in this cloud environment (tokenIssuer=${cloud.tokenIssuer}). ` +
      'The default negotiate endpoint targets the public commercial cloud; using it from a ' +
      'sovereign cloud would cross a data boundary. Set socketMode.negotiateBaseUrl to your ' +
      'cloud\'s Socket Mode endpoint, or use the HTTP inbound transport instead.'
    );
  }

  /** The configured geos, defaulting to amer/emea/apac. */
  private resolveGeos(): readonly string[] {
    const geos = this.options.geos ?? DEFAULT_GEOS;
    if (geos.length === 0) {
      throw new Error(
        'socketMode.geos must contain at least one geo. Pass a single empty string ([""]) ' +
        'to connect to the base negotiate URL without a geo segment.'
      );
    }
    return geos;
  }

  /**
   * Handle one inbound envelope: feed the embedded activity into the app
   * pipeline via the captured messaging {@link HttpRouteHandler} and return the
   * reply frame to send back over client results. The activity is delivered as a
   * pre-authenticated request ({@link IHttpServerRequest.token} set to the
   * synthesized socket token), so the HTTP server skips per-request JWT
   * validation.
   *
   * Invoke activities return the pipeline's status/body; one-way activities
   * return a post-handler acknowledgement once the pipeline has run.
   */
  private async handleEnvelope(envelope: SocketActivityEnvelope): Promise<ReplyFrame | undefined> {
    const base = replyFrameBase(envelope, this.botId);

    // Reject an envelope declaring a protocol version newer than we support
    // BEFORE dispatch: a future major version may change the reply contract, so
    // running the handler and replying with our v1 frame could be misinterpreted.
    // Absent/lower versions are treated as current for backward compatibility.
    const declaredVersion = Number(readField(envelope, 'protocolVersion'));
    if (Number.isFinite(declaredVersion) && declaredVersion > SOCKET_MODE_PROTOCOL_VERSION) {
      this.log.warn(
        `socket-mode: rejecting envelope with unsupported protocolVersion=${declaredVersion} ` +
        `(supported=${SOCKET_MODE_PROTOCOL_VERSION}) envelopeId=${base.envelopeId ?? ''}`
      );
      return {
        protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        envelopeId: base.envelopeId,
        botKey: base.botKey,
        status: 400,
        body: { error: `unsupported protocolVersion ${declaredVersion}` },
        recvAt: base.recvAt,
        ts: Date.now(),
      };
    }

    const activity = readEnvelopeActivity(envelope);

    if (!activity) {
      this.log.warn('socket-mode: inbound envelope had no activity payload; dropping');
      return undefined;
    }

    if (!this.messagingHandler) {
      this.log.warn('socket-mode: messaging handler not registered yet; dropping inbound envelope');
      return undefined;
    }

    const invoke = isInvokeEnvelope(envelope);
    this.log.debug(
      `socket-mode: recv kind=${invoke ? 'invoke' : 'activity'} type=${activity.type} envelopeId=${base.envelopeId ?? ''}`
    );

    try {
      const request: IHttpServerRequest = {
        body: activity,
        headers: {},
        token: this.inboundToken(activity),
      };
      const response = await this.messagingHandler(request);
      const reply = invoke
        ? buildInvokeReplyFrame(base, response)
        : buildAckReplyFrame(base, response.status);
      this.log.debug(
        `socket-mode: reply sent kind=${invoke ? 'invoke' : 'ack'} status=${reply.status} envelopeId=${base.envelopeId ?? ''}`
      );
      return reply;
    } catch (error: any) {
      this.log.error(
        `socket-mode: failed to process an inbound activity type=${activity.type} envelopeId=${base.envelopeId ?? ''}`,
        error
      );
      await this.reportError(error);
      return {
        protocolVersion: SOCKET_MODE_PROTOCOL_VERSION,
        envelopeId: base.envelopeId,
        botKey: base.botKey,
        status: 500,
        body: invoke ? { error: 'bot handler error' } : undefined,
        recvAt: base.recvAt,
        ts: Date.now(),
      };
    }
  }

  /**
   * Invoke the optional {@link SocketModeAdapterDeps.onError} hook, awaiting it
   * (behind an error boundary) so an async handler completes before we return
   * the reply frame, and a throwing/rejecting hook can't crash the transport.
   */
  private async reportError(error: Error): Promise<void> {
    if (!this.deps.onError) return;
    try {
      await this.deps.onError(error);
    } catch (hookError) {
      this.log.warn('socket-mode: onError hook threw; ignoring', hookError);
    }
  }

  /** The bot's client id, echoed on reply frames for Teams backend service routing. */
  private get botId(): string | undefined {
    return this.credentials?.clientId;
  }

  /**
   * Acquire the Bot Framework negotiate token (string form) via the app's token
   * provider, so Socket Mode reuses the same credential flow as the rest of the SDK.
   */
  private async acquireBotToken(): Promise<string> {
    const token = await this.deps.tokenProvider.getAppToken();
    if (token == null) {
      throw new Error(
        'Socket Mode could not acquire a Bot Framework app token. Check that the app credentials are configured.'
      );
    }
    return token.toString();
  }

  /**
   * Build the normalized {@link IToken} the activity pipeline reads (primarily
   * `serviceUrl`, plus bot identity). This is the socket transport's equivalent
   * of what {@link HttpServer} yields after it validates the inbound JWT: the
   * pipeline consumes an `IToken`, not a raw credential. It mirrors the exact
   * shape produced by `InboundActivityTokenValidator` and the HTTP transport.
   *
   * There is no per-activity token to validate here — the socket itself is
   * authenticated once during the Teams backend service negotiate handshake, so authenticity is
   * established at the transport layer rather than per message. `fromId` is left
   * empty because the socket carries no per-message verified caller subject.
   *
   * Note the differences from the HTTP transport, which matter if a handler
   * forwards `ctx.token` outbound: `serviceUrl` comes from the activity (the
   * pipeline reads `activity.serviceUrl || token.serviceUrl`, and inbound socket
   * activities always carry it); `toString()` is empty (there is no bearer to
   * forward — outbound sends mint their own token via the app credentials); and
   * `isExpired()` is always `false` since there is no per-message token to expire.
   */
  private inboundToken(activity: Activity): IToken {
    const serviceUrl = activity.serviceUrl ?? '';
    return {
      appId: this.botId ?? '',
      from: 'azure',
      fromId: '',
      serviceUrl,
      toString: () => '',
      isExpired: () => false,
    };
  }
}

/**
 * One supervised socket connection for a single geo. Owns its own connection
 * generation, readiness gate, reconnect supervisor, and proactive token refresh,
 * and delegates shared concerns (envelope handling, events, back-off policy, the
 * abort signal) back to the owning {@link SocketModeAdapter}. Multiple
 * `GeoSocket`s run independently so one geo dropping never affects delivery on
 * the others.
 */
class GeoSocket {
  /** Monotonic connection generation; fences out frames from superseded connections. */
  private generation = 0;
  private currentGen = 0;
  /** The generation that has satisfied `SocketReady`; `-1` when none is ready. */
  private readyGen = -1;
  private connection?: ISocketConnection;
  private supervisorLoop?: Promise<void>;
  private refreshTimer?: ReturnType<typeof setTimeout>;
  private _status: SocketModeStatus = 'idle';
  /** Settles when the current connection terminates; drives the supervisor. */
  private closed: Promise<Error | undefined> = Promise.resolve(undefined);

  constructor(
    private readonly server: SocketModeAdapter,
    readonly geo: string,
    private readonly negotiateUrl: string,
    private readonly log: ILogger
  ) {}

  get status(): SocketModeStatus {
    return this._status;
  }

  /** The dispatch fence: current generation, ready, and the server is accepting. */
  canDispatch(gen: number): boolean {
    return this.server.accepting && gen === this.currentGen && this.readyGen === gen;
  }

  /**
   * Establish the first connection for this geo, retrying transient failures
   * with back-off until it succeeds or the startup budget is exhausted (then
   * re-throwing so App.start() fails).
   */
  async startInitial(): Promise<void> {
    this._status = 'connecting';
    const deadline = Date.now() + this.server.startupTimeoutMs;
    let attempt = 0;
    let lastError: Error | undefined;

    while (this.server.accepting) {
      const gen = ++this.generation;
      this.currentGen = gen;
      try {
        this.closed = (await this.connectCycle(gen)).closed;
        this._status = 'ready';
        return;
      } catch (err: any) {
        lastError = err;
        if (!this.server.accepting) break;
        const delay = this.server.retryAfterOf(err) ?? this.server.backoffDelay(attempt);
        attempt++;
        if (Date.now() + delay >= deadline) break; // no budget for another attempt
        this.log.warn(
          `socket-mode[${this.geo}]: initial connect attempt ${attempt} failed; retrying in ${delay}ms`,
          err
        );
        const slept = await this.server.sleep(delay);
        if (!slept) break;
      }
    }
    throw lastError ?? new Error(`Socket Mode failed to establish the initial connection for geo '${this.geo}'.`);
  }

  /** Launch the reconnect supervisor in the background (after the first ready). */
  superviseInBackground(): void {
    this.supervisorLoop = this.supervise().catch((err) => {
      this.log.error(`socket-mode[${this.geo}]: reconnect supervisor stopped unexpectedly`, err);
    });
  }

  /** Drain-agnostic close of this geo: abort refresh, close the connection. */
  async stop(): Promise<void> {
    this.clearRefreshTimer();
    const connection = this.connection;
    this.connection = undefined;
    if (connection) {
      await connection.stop().catch(() => undefined);
    }
    await this.supervisorLoop?.catch(() => undefined);
    this._status = 'stopped';
  }

  /**
   * Build one connection generation for this geo, wire its callbacks, open it,
   * and — once ready — schedule proactive token refresh. Returns a promise that
   * settles when this connection terminates.
   */
  private async connectCycle(gen: number): Promise<{ closed: Promise<Error | undefined> }> {
    let settled = false;
    let settle!: (error?: Error) => void;
    const closed = new Promise<Error | undefined>((resolve) => {
      settle = (error) => {
        if (!settled) {
          settled = true;
          resolve(error);
        }
      };
    });

    const handlers: SocketConnectionHandlers = {
      onActivity: (envelope) => this.server.dispatch(this, gen, envelope),
      onReady: (frame) => {
        this.readyGen = gen;
        this.server.emit('ready', { geo: this.geo, frame });
      },
      onClosed: (error) => {
        this.clearRefreshTimer();
        settle(error);
      },
    };

    const connection = this.server.createConnection(this.negotiateUrl, handlers);
    this.connection = connection;

    await connection.start(this.server.abortSignal);
    this.scheduleTokenRefresh(gen, connection.expiresInSeconds, () => settle());
    return { closed };
  }

  /**
   * Reconnect supervisor for this geo: wait for the current connection to drop
   * (or for stop), then renegotiate a fresh connection — new token, new
   * `SocketReady` gate — retrying with back-off until stop.
   */
  private async supervise(): Promise<void> {
    let closed = this.closed;
    while (this.server.accepting) {
      const aborted = this.whenAborted();
      let error: Error | undefined;
      try {
        error = await Promise.race([closed, aborted.promise]);
      } finally {
        // Remove the abort listener registered for this iteration; without this
        // a listener accumulates on every reconnect for the process lifetime
        // when `closed` (not the abort) wins the race.
        aborted.dispose();
      }
      if (!this.server.accepting) return;

      this.readyGen = -1;
      this._status = 'disconnected';
      this.log.warn(`socket-mode[${this.geo}]: disconnected; inbound delivery paused for this geo`, error);
      this.server.emit('disconnected', { geo: this.geo, error });

      await this.connection?.stop().catch(() => undefined);

      const next = await this.reconnect(error);
      if (!next) return; // stopped while backing off

      closed = next.closed;
      this._status = 'ready';
      this.log.info(`socket-mode[${this.geo}]: reconnected; inbound delivery resumed for this geo`);
      this.server.emit('reconnected', { geo: this.geo });
    }
  }

  /**
   * A promise that resolves when the server's abort signal fires, paired with a
   * `dispose()` that removes the listener. The caller MUST call `dispose()` once
   * the race it participates in settles, otherwise the listener leaks across
   * reconnects.
   */
  private whenAborted(): { promise: Promise<undefined>; dispose: () => void } {
    const signal = this.server.abortSignal;
    if (!signal || signal.aborted) {
      return { promise: Promise.resolve(undefined), dispose: () => undefined };
    }
    let onAbort!: () => void;
    const promise = new Promise<undefined>((resolve) => {
      onAbort = () => resolve(undefined);
      signal.addEventListener('abort', onAbort, { once: true });
    });
    return { promise, dispose: () => signal.removeEventListener('abort', onAbort) };
  }

  private async reconnect(prevError?: Error): Promise<{ closed: Promise<Error | undefined> } | undefined> {
    let attempt = 0;
    let retryAfterMs = this.server.retryAfterOf(prevError);

    while (this.server.accepting) {
      const delay = retryAfterMs ?? this.server.backoffDelay(attempt);
      attempt++;
      const slept = await this.server.sleep(delay);
      if (!slept || !this.server.accepting) return undefined;

      this._status = 'connecting';
      const gen = ++this.generation;
      this.currentGen = gen;
      try {
        return await this.connectCycle(gen);
      } catch (err: any) {
        retryAfterMs = this.server.retryAfterOf(err);
        this.log.warn(`socket-mode[${this.geo}]: reconnect attempt ${attempt} failed; will retry`, err);
      }
    }
    return undefined;
  }

  private scheduleTokenRefresh(
    gen: number,
    expiresInSeconds: number | undefined,
    triggerRefresh: () => void
  ): void {
    this.clearRefreshTimer();
    if (!expiresInSeconds || expiresInSeconds <= 0) return;

    const delay = Math.max(expiresInSeconds * 1000 - this.server.tokenRefreshMarginMs, 1_000);
    this.refreshTimer = setTimeout(() => {
      if (!this.server.accepting || gen !== this.currentGen) return;
      this.log.info(`socket-mode[${this.geo}]: proactively renegotiating before token expiry`);
      triggerRefresh();
    }, delay);
    this.refreshTimer.unref?.();
  }

  private clearRefreshTimer(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = undefined;
    }
  }
}
