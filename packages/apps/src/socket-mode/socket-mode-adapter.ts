import { Activity, Credentials, InvokeResponse, IToken } from '@microsoft/teams.api';
import {
  Client as HttpClient,
  ConsoleLogger,
  EventEmitter,
  IEventEmitter,
  ILogger,
} from '@microsoft/teams.common';

import { IActivityEvent } from '../events';
import { HttpMethod, HttpRouteHandler, IHttpServerAdapter } from '../http/adapter';
import { IAppTokenProvider } from '../token-provider';

import {
  buildAckReplyFrame,
  buildInvokeReplyFrame,
  isInvokeEnvelope,
  readEnvelopeActivity,
  readField,
  replyFrameBase,
} from './envelope';
import { GeoSocket } from './geo-socket';
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
  /**
   * A geo's socket dropped unexpectedly; a reconnect for that geo may be in
   * progress. Not emitted for a planned proactive token rotation, which
   * renegotiates transparently without surfacing a drop.
   */
  disconnected: { geo: string; error?: Error };
  /**
   * A geo's socket reconnected after an unexpected drop and re-established its
   * Teams backend service group. Not emitted for a planned token rotation.
   */
  reconnected: { geo: string };
};

/**
 * Dependencies the owning {@link App} supplies to the socket adapter, wired
 * internally rather than by the developer.
 */
export type SocketModeAdapterDeps = {
  /** App credentials used to identify the bot on reply frames. */
  readonly credentials?: Credentials;
  /** The app's shared HTTP client used for Socket Mode negotiation. */
  readonly client: HttpClient;
  /**
   * Token source for the Bot Framework token that authenticates the Teams backend service
   * negotiate call, reusing the app's credentials.
   */
  readonly tokenProvider: IAppTokenProvider;
  /**
   * Dispatches a connection-authenticated activity into the owning app's shared
   * activity pipeline. Socket Mode creates the normalized token internally.
   */
  readonly processActivity: (event: IActivityEvent) => Promise<InvokeResponse>;
  /**
   * The messaging endpoint path the owning {@link HttpServer} registers its
   * inbound-activity route on. Inbound socket frames are dispatched to the
   * handler registered for this path; {@link SocketModeAdapter.registerRoute}
   * calls for any other path (e.g. `app.function()` routes) are no-ops, since a
   * socket transport serves only messaging.
   */
  readonly messagingEndpoint: string;
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
 * separate server, Socket Mode plugs in as the adapter *inside* the app's single
 * {@link HttpServer}. Inbound frames enter the same app activity pipeline as
 * HTTP after the connection-authenticated transport creates their normalized
 * token. Only inbound delivery moves to the socket; outbound sends stay on HTTP
 * and handlers stay transport-agnostic.
 *
 * No inbound HTTP adapter, listener, route, or public endpoint is started. The
 * socket is authenticated once at negotiate, so the adapter synthesizes the
 * {@link IToken} the pipeline expects without exposing transport trust through
 * the public HTTP request interface. Invoke activities return a real invoke
 * response over SignalR client results; one-way activities return a post-handler
 * ack. Not usable until Teams backend service's `SocketReady` frame arrives.
 *
 * Browser-oriented calls are no-ops: tabs, remote functions, OAuth callbacks,
 * and other non-messaging routes require an HTTP transport.
 * WebSocket is only recommended for use when developing agents.
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

  /** One independent supervised connection per geo. */
  private geoSockets: GeoSocket[] = [];

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
    const states = this.geoSockets.map((g) => g.status);
    if (states.length > 0 && states.every((s) => s === 'ready')) return 'ready';
    if (states.some((s) => s === 'disconnected')) return 'disconnected';
    return 'connecting';
  }

  /** Per-geo status snapshot, for diagnostics/observability. */
  get geoStatuses(): ReadonlyArray<{ geo: string; status: SocketModeStatus }> {
    return this.geoSockets.map((g) => ({ geo: g.geo, status: g.status }));
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
   * {@link IHttpServerAdapter} route registration. The owning {@link HttpServer}
   * registers its inbound-activity route here as part of normal server
   * initialization. Socket Mode dispatches through its internal app callback, so
   * the messaging route is accepted as a no-op. Any other path (e.g.
   * `app.function()` POST routes) is also a no-op, but is warned because the
   * corresponding HTTP-only feature is unavailable.
   */
  registerRoute(method: HttpMethod, path: string, _handler: HttpRouteHandler): void {
    if (method === 'POST' && path === this.deps.messagingEndpoint) {
      return;
    }
    const message =
      `socket-mode: ignoring ${method} ${path} — Socket Mode serves only the messaging endpoint. ` +
      'Browser features (app.function()/app.tab()/OAuth routes) are unavailable.';
    this.log.warn(message);
  }

  /**
   * {@link IHttpServerAdapter} static-file serving. No-op for Socket Mode — tabs
   * and other static assets require an HTTP transport, so the ignored mount is
   * warned.
   */
  serveStatic(path: string, _directory: string): void {
    const message =
      `socket-mode: ignoring serveStatic(${path}) — Socket Mode has no HTTP transport for static ` +
      'files; app.tab() is unavailable.';
    this.log.warn(message);
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
    this.stopped = false;
    this._lifecycle = 'starting';
    this.abort = new AbortController();

    const geos = this.resolveGeos();
    this.geoSockets = geos.map((geo) => this.createGeoSocket(geo));
    this.log.info(
      `socket-mode: connecting to Socket Mode across ${geos.length} geo(s): ${geos.join(', ')}`
    );

    // Every geo must establish its first connection for start to succeed; a geo
    // that can't connect within the startup budget fails App.start(), which then
    // tears everything down. Post-startup drops are handled per-geo by supervisors.
    try {
      await Promise.all(this.geoSockets.map((g) => g.startInitial()));
    } catch (err) {
      await this.stop();
      throw err;
    }

    this._lifecycle = 'started';
    this.log.info('socket-mode: Socket Mode ready (inbound activities over WebSocket)');
    for (const geoSocket of this.geoSockets) geoSocket.superviseInBackground();
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

    await Promise.all(
      this.geoSockets.map((geoSocket) =>
        geoSocket.stop().catch((err) => {
          this.log.debug(`socket-mode[${geoSocket.geo}]: failed to stop geo socket`, err);
        })
      )
    );
  }

  /** Build one geo supervisor from the adapter's narrow internal callbacks. */
  private createGeoSocket(geo: string): GeoSocket {
    return new GeoSocket(
      {
        isAccepting: () => !this.stopped,
        getAbortSignal: () => this.abort?.signal,
        createConnection: (negotiateUrl, handlers) =>
          this.createConnection(negotiateUrl, handlers),
        dispatch: (envelope) => this.dispatch(envelope),
        retryAfterOf: (error) => this.retryAfterOf(error),
        backoffDelay: (attempt) => this.backoffDelay(attempt),
        sleep: (ms) => this.sleep(ms),
        onReady: (frame) => this.emit('ready', { geo, frame }),
        onDisconnected: (error) => this.emit('disconnected', { geo, error }),
        onReconnected: () => this.emit('reconnected', { geo }),
        startupTimeoutMs:
          this.options.startupTimeoutMs ?? DEFAULT_STARTUP_TIMEOUT_MS,
        tokenRefreshMarginMs: TOKEN_REFRESH_MARGIN_MS,
      },
      geo,
      buildNegotiateUrl(this.negotiateBase, geo),
      this.log
    );
  }

  /** Build a connection for a geo. */
  private createConnection(
    negotiateUrl: string,
    handlers: SocketConnectionHandlers
  ): ISocketConnection {
    return new SignalRSocketConnection(
      {
        negotiateUrl,
        client: this.deps.client,
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
  private backoffDelay(attempt: number): number {
    const schedule = this.options.reconnectDelaysMs;
    if (schedule && schedule.length > 0) {
      return schedule[Math.min(attempt, schedule.length - 1)];
    }
    const capped = Math.min(RECONNECT_INITIAL_DELAY_MS * 2 ** attempt, RECONNECT_MAX_DELAY_MS);
    return Math.floor(Math.random() * capped); // full jitter
  }

  /** Abortable delay; resolves `true` when it completed, `false` if aborted. */
  private sleep(ms: number): Promise<boolean> {
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

  private retryAfterOf(error: unknown): number | undefined {
    return retryAfterFrom(error);
  }

  /** Emit a lifecycle event without letting a throwing listener break state. */
  private emit<K extends keyof SocketModeEvents>(
    event: K,
    payload: SocketModeEvents[K]
  ): void {
    try {
      this.events.emit(event, payload);
    } catch (err) {
      this.log.warn(`socket-mode: a '${String(event)}' event listener threw`, err);
    }
  }

  /**
   * Dispatch one inbound envelope after the geo supervisor applies its
   * generation/readiness/admission fence. There is no concurrency cap or
   * admission queue: SignalR already invokes the handler per activity, the Teams
   * backend load-balances delivery across connections/instances, and each
   * activity carries a reply deadline, so an in-SDK cap would mostly produce
   * work whose reply is discarded.
   */
  private async dispatch(
    envelope: SocketActivityEnvelope
  ): Promise<ReplyFrame | undefined> {
    return await this.handleEnvelope(envelope);
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
   * Handle one inbound envelope: feed the embedded activity and an internally
   * synthesized token into the app pipeline, then return the reply frame to send
   * back over client results.
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

    const invoke = isInvokeEnvelope(envelope);
    this.log.debug(
      `socket-mode: recv kind=${invoke ? 'invoke' : 'activity'} type=${activity.type} envelopeId=${base.envelopeId ?? ''}`
    );

    try {
      const response = await this.deps.processActivity({
        body: activity,
        token: this.inboundToken(activity),
      });
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
    return this.deps.credentials?.clientId;
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
   * Build the normalized token expected by the shared activity pipeline. Socket
   * authentication is established at negotiation, so there is no per-activity
   * bearer token to validate or forward.
   */
  private inboundToken(activity: Activity): IToken {
    return {
      appId: this.botId ?? '',
      from: 'azure',
      fromId: '',
      serviceUrl: activity.serviceUrl ?? '',
      toString: () => '',
      isExpired: () => false,
    };
  }
}
