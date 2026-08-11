import { Activity, Credentials, InvokeResponse, IToken } from '@microsoft/teams.api';
import { ConsoleLogger, EventEmitter, IEventEmitter, ILogger } from '@microsoft/teams.common';

import { IActivityEvent } from '../events';
import { IServer, IServerInitializeDeps } from '../server';
import { IAppTokenProvider } from '../token-provider';

import {
  buildAckReplyFrame,
  buildInvokeReplyFrame,
  isInvokeEnvelope,
  readEnvelopeActivity,
  replyFrameBase,
} from './envelope';
import { SignalRSocketConnection } from './socket-connection';
import {
  DEFAULT_WS_CONNECT_NEGOTIATE_BASE_URL,
  ISocketConnection,
  ReplyFrame,
  SocketActivityEnvelope,
  SocketReadyFrame,
  WS_CONNECT_NEGOTIATE_PATH,
  WS_CONNECT_PROTOCOL_VERSION,
  WsConnectOptions,
  WsConnectStatus,
} from './types';

const DEFAULT_READINESS_TIMEOUT_MS = 30_000;
const DEFAULT_RECONNECT_DELAYS_MS = [0, 2000, 5000, 10_000, 20_000];

/**
 * Lifecycle events emitted by {@link SocketServer.events}. Subscribe via
 * `app.wsConnect?.events.on('ready', ...)` to observe the socket lifecycle.
 */
export type WsConnectEvents = {
  /** The socket connected and APX confirmed readiness (`SocketReady`). */
  ready: SocketReadyFrame;
  /** The socket dropped; a reconnect may be in progress. */
  disconnected: { error?: Error };
  /** The socket reconnected and re-established its APX group. */
  reconnected: undefined;
};

/**
 * Dependencies the owning {@link App} supplies to the socket server. Kept
 * separate from the public {@link WsConnectOptions} because they are wired
 * internally rather than by the developer.
 *
 * Mirrors how {@link HttpServer} takes its inputs: the app's credentials (and
 * cloud) arrive as data through {@link SocketServer.initialize}, and outbound
 * token acquisition goes through the app's {@link IAppTokenProvider} service —
 * no ad-hoc per-value function callbacks.
 */
export type SocketServerDeps = {
  /**
   * The app's token source, used to acquire the Bot Framework access token that
   * authenticates the APX negotiate call. Reuses the app's existing credentials
   * — Socket Mode adds no second token.
   */
  readonly tokenProvider: IAppTokenProvider;
  /** Surface an unexpected inbound-processing error to the app pipeline. */
  readonly onError?: (error: Error) => void;
  /** Logger to use; defaults to a `SocketServer`-tagged console logger. */
  readonly logger?: ILogger;
};

/**
 * Inbound Socket Mode transport for teams.ts, implemented as an {@link IServer}.
 *
 * When enabled via `new App({ wsConnect: true })`, the app uses this server as
 * its inbound transport instead of an HTTP listener: it negotiates an APX Socket
 * Mode connection, opens an Azure SignalR socket, and feeds inbound activities
 * straight into the app pipeline via {@link IServer.onRequest}. Only inbound
 * delivery moves to the socket — outbound sends still go over the HTTP
 * conversation API, and handlers remain transport-agnostic.
 *
 * Unlike the HTTP transport, Socket Mode does not speak HTTP at all outside the
 * negotiate handshake: there are no routes, no static file serving, and no
 * per-request JWT — the socket is authenticated once during negotiate, so the
 * server synthesizes the {@link IToken} the pipeline expects.
 *
 * - **invoke** activities return a real {@link InvokeResponse} over SignalR
 *   client results (a versioned reply frame with status/body).
 * - **one-way** activities return a post-handler delivery acknowledgement once
 *   the handler pipeline has run.
 *
 * The connection is not treated as usable until APX's `SocketReady` readiness
 * frame arrives.
 */
export class SocketServer implements IServer {
  /** Transport discriminant identifying this as the Socket Mode server. */
  readonly transport = 'socket' as const;

  /**
   * Callback the App sets to process an inbound activity and return the invoke
   * response. Set by the App during construction.
   */
  onRequest?: (event: IActivityEvent) => Promise<InvokeResponse>;

  /**
   * Lifecycle event surface for observing the socket without reaching into the
   * transport. Emits `ready`, `disconnected`, and `reconnected`.
   */
  readonly events: IEventEmitter<WsConnectEvents> = new EventEmitter<WsConnectEvents>();

  private readonly log: ILogger;
  private _status: WsConnectStatus = 'idle';
  private connection?: ISocketConnection;
  private credentials?: Credentials;

  constructor(
    readonly options: WsConnectOptions = {},
    private readonly deps: SocketServerDeps
  ) {
    this.log = deps.logger ?? new ConsoleLogger('SocketServer');
  }

  /**
   * The current lifecycle status of the socket. `ready` means inbound
   * activities can be delivered; any other value means they cannot yet.
   */
  get status(): WsConnectStatus {
    return this._status;
  }

  /**
   * Resolved negotiate URL (`{negotiateBaseUrl}/v3/websockets/connect`).
   */
  get negotiateUrl(): string {
    const base = (this.options.negotiateBaseUrl ?? DEFAULT_WS_CONNECT_NEGOTIATE_BASE_URL)
      .replace(/\/+$/, '');
    return `${base}${WS_CONNECT_NEGOTIATE_PATH}`;
  }

  /**
   * {@link IServer} lifecycle. Receives the app's credentials the same way the
   * HTTP server does; the bot id echoed on reply frames is derived from them.
   * The negotiate token is acquired lazily in {@link start} via the token
   * provider, so there is nothing else to do here.
   */
  async initialize(deps: IServerInitializeDeps): Promise<void> {
    this.credentials = deps.credentials;
  }

  /**
   * {@link IServer} lifecycle: negotiate and open the socket, resolving only
   * once the readiness contract is satisfied. Called by {@link App.start}. The
   * `port` argument is unused — Socket Mode dials out rather than listening.
   */
  async start(_port?: number | string): Promise<void> {
    this._status = 'connecting';

    const factory = this.options.connectionFactory ??
      ((context, handlers) => new SignalRSocketConnection(context, handlers, this.log));

    this.connection = factory(
      {
        negotiateUrl: this.negotiateUrl,
        getBotToken: () => this.acquireBotToken(),
        readinessTimeoutMs: this.options.readinessTimeoutMs ?? DEFAULT_READINESS_TIMEOUT_MS,
        reconnectDelaysMs: this.options.reconnectDelaysMs ?? DEFAULT_RECONNECT_DELAYS_MS,
      },
      {
        onActivity: (envelope) => this.handleEnvelope(envelope),
        onReady: (frame) => {
          this._status = 'ready';
          this.events.emit('ready', frame);
        },
        onDisconnected: (error) => {
          this._status = 'disconnected';
          this.events.emit('disconnected', { error });
        },
        onReconnected: () => {
          this._status = 'ready';
          this.events.emit('reconnected', undefined);
        },
      }
    );

    try {
      await this.connection.start();
      this._status = 'ready';
      this.log.info('Socket Mode ready (inbound activities over WebSocket).');
    } catch (error: any) {
      this._status = 'disconnected';
      throw error;
    }
  }

  /**
   * {@link IServer} lifecycle: close the socket. Called by {@link App.stop}.
   */
  async stop(): Promise<void> {
    this._status = 'stopped';
    const connection = this.connection;
    this.connection = undefined;
    if (connection) {
      await connection.stop();
    }
  }

  /**
   * Handle one inbound envelope: feed the embedded activity into the app
   * pipeline via {@link onRequest} and return the reply frame to send back over
   * client results.
   *
   * Invoke activities return the pipeline's status/body; one-way activities
   * return a post-handler acknowledgement once the pipeline has run.
   */
  async handleEnvelope(envelope: SocketActivityEnvelope): Promise<ReplyFrame | undefined> {
    const base = replyFrameBase(envelope, this.botId);
    const activity = readEnvelopeActivity(envelope);

    if (!activity) {
      this.log.warn('SocketServer recv << envelope had no activity payload; dropping.');
      return undefined;
    }

    if (!this.onRequest) {
      this.log.warn('SocketServer recv << onRequest not set yet; dropping.');
      return undefined;
    }

    const invoke = isInvokeEnvelope(envelope);
    this.log.debug(
      `SocketServer recv << kind=${invoke ? 'invoke' : 'activity'} type=${activity.type} envelopeId=${base.envelopeId ?? ''}`
    );

    try {
      const response = await this.onRequest({
        token: this.syntheticToken(activity),
        body: activity,
      });
      return invoke
        ? buildInvokeReplyFrame(base, response)
        : buildAckReplyFrame(base, response.status);
    } catch (error: any) {
      this.log.error('SocketServer failed to process an inbound activity', error);
      this.deps.onError?.(error);
      return {
        protocolVersion: WS_CONNECT_PROTOCOL_VERSION,
        envelopeId: base.envelopeId,
        botKey: base.botKey,
        status: 500,
        body: invoke ? { error: 'bot handler error' } : undefined,
        recvAt: base.recvAt,
        ts: Date.now(),
      };
    }
  }

  /** The bot's client id, echoed on reply frames for APX routing. */
  private get botId(): string | undefined {
    return this.credentials?.clientId;
  }

  /**
   * Acquire the Bot Framework access token used to authenticate the APX
   * negotiate call, in string form. Delegates to the app's token provider so
   * Socket Mode reuses the exact same credential/token flow as the rest of the
   * SDK.
   */
  private async acquireBotToken(): Promise<string> {
    return (await this.deps.tokenProvider.getAppToken())?.toString() ?? '';
  }

  /**
   * Build the {@link IToken} the pipeline expects for an inbound activity.
   *
   * Socket delivery is already authenticated at the transport layer (the socket
   * was opened with an APX-negotiated token minted from the bot's credentials),
   * so there is no per-activity Authorization header to validate the way the
   * HTTP transport does. The synthesized token supplies the `serviceUrl` and
   * bot identity the downstream pipeline reads.
   */
  private syntheticToken(activity: Activity): IToken {
    const serviceUrl = activity.serviceUrl ?? '';
    const appId = this.botId ?? '';
    return {
      appId,
      serviceUrl,
      from: 'azure',
      fromId: appId,
      isExpired: () => false,
      toString: () => '',
    };
  }
}
