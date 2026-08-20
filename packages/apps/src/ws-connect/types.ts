/**
 * The Socket Mode protocol version teams.ts speaks. Every reply frame the bot
 * returns over SignalR client results MUST carry this so APX can detect a
 * protocol mismatch and fall back to HTTP delivery instead of trusting a stale
 * reply. Bump only in lockstep with APX's `SocketProtocol.CurrentVersion`.
 */
export const WS_CONNECT_PROTOCOL_VERSION = 1;

/**
 * Default APX host used to negotiate the Socket Mode connection when no
 * {@link WsConnectOptions.negotiateBaseUrl} is provided. The negotiate route
 * (`/v3/websockets/connect`) is appended to this base.
 */
export const DEFAULT_WS_CONNECT_NEGOTIATE_BASE_URL = 'https://botapi.skype.com';

/**
 * The negotiate route appended to the APX base URL. APX exposes the Socket Mode
 * handshake at `POST {base}/v3/websockets/connect`.
 */
export const WS_CONNECT_NEGOTIATE_PATH = '/v3/websockets/connect';

/**
 * Lifecycle status of the {@link SocketServer} socket.
 *
 * - `idle` — created but not yet started.
 * - `connecting` — negotiating and opening the socket, or reconnecting.
 * - `ready` — socket is open AND the APX `SocketReady` readiness contract has
 *   been satisfied; inbound activities can be delivered.
 * - `disconnected` — the socket closed (a reconnect may be in progress).
 * - `stopped` — the server was stopped and will not reconnect.
 */
export type WsConnectStatus =
  | 'idle'
  | 'connecting'
  | 'ready'
  | 'disconnected'
  | 'stopped';

/**
 * Options controlling the inbound Socket Mode transport, passed as
 * `new App({ wsConnect: { ... } })`. Passing `wsConnect: true` uses all
 * defaults.
 */
export type WsConnectOptions = {
  /**
   * Base URL of the APX endpoint used to negotiate the socket. The negotiate
   * request is sent to `{negotiateBaseUrl}/v3/websockets/connect`.
   *
   * Defaults to {@link DEFAULT_WS_CONNECT_NEGOTIATE_BASE_URL}. Override this to
   * target a regional or Canary APX ring
   * (e.g. `https://canary.botapi.skype.com/amer`).
   */
  readonly negotiateBaseUrl?: string;

  /**
   * How long, in milliseconds, to wait for APX's `SocketReady` frame after the
   * underlying socket connects before treating the connection as failed. The
   * connection is not considered usable until this readiness contract is
   * satisfied.
   *
   * @default 30000
   */
  readonly readinessTimeoutMs?: number;

  /**
   * Reconnect back-off schedule (milliseconds between retries) handed to the
   * SignalR client's automatic reconnect. When omitted, a default staggered
   * schedule is used. Pass an empty array to disable automatic reconnect.
   */
  readonly reconnectDelaysMs?: readonly number[];

  /**
   * Factory used to create the underlying socket connection. Primarily a test
   * seam — production code defaults to a `@microsoft/signalr` backed
   * connection. When provided, this overrides the built-in SignalR factory.
   */
  readonly connectionFactory?: SocketConnectionFactory;

  /**
   * **Experimental.** When Socket Mode is enabled, also stand up an HTTP
   * messaging endpoint alongside the socket so the **service (APX)** can deliver
   * inbound activities over either transport — APX decides which one to use per
   * activity. The HTTP adapter is created implicitly (a default `ExpressAdapter`
   * unless an `httpServerAdapter` is supplied to `App`); you do not need to
   * configure one.
   *
   * This only affects **inbound** delivery. The HTTP transport here is a
   * messaging-inbound sink only: browser-dependent features that Socket Mode
   * disables (`app.tab()`, `app.function()`, OAuth redirect callbacks) remain
   * **unavailable** — enabling the fallback does not re-enable them.
   *
   * Set to `false` for a socket-only app (no HTTP endpoint).
   *
   * @experimental This is a transitional capability for the Socket Mode rollout
   * and is expected to be removed once Socket Mode becomes the sole inbound
   * transport. Its behavior and this option may change or be removed without a
   * major-version bump.
   * @default true
   */
  readonly fallbackToHttp?: boolean;
};

/**
 * Result of a successful APX negotiate call. Mirrors the APX response body.
 */
export type NegotiateResult = {
  /** Azure SignalR URL to open the socket against. */
  readonly url: string;
  /** Bearer access token for the Azure SignalR connection. */
  readonly accessToken: string;
  /** Token lifetime in seconds. */
  readonly expiresIn: number;
};

/**
 * The `SocketReady` frame APX pushes once the connection is registered in the
 * bot's group and inbound delivery can begin.
 */
export type SocketReadyFrame = {
  readonly botKey?: string;
  readonly connectionId?: string;
};

/**
 * The envelope APX delivers on the SignalR `Activity` client method. Field
 * casing may vary with the hub protocol, so always read via the
 * `readEnvelope*` helpers rather than by direct property access.
 */
export type SocketActivityEnvelope = {
  /** Protocol version APX used to encode this envelope. */
  readonly protocolVersion?: number;
  /** Correlation id echoed back on the reply frame. */
  readonly envelopeId?: string;
  /** `"invoke"` for invoke activities; the activity type otherwise. */
  readonly type?: string;
  /**
   * Whether APX expects a delivery acknowledgement. `true` for one-way
   * activities; invoke activities expect a full result instead.
   */
  readonly ackRequired?: boolean;
  /** The Bot Framework activity payload. */
  readonly payload?: unknown;
  /** Optional activity payload alias used by some APX builds. */
  readonly activity?: unknown;
  /** MS-CV correlation vector for log stitching. */
  readonly cv?: string;
};

/**
 * The frame the bot RETURNS from its `Activity` handler (SignalR client
 * results). For an invoke it carries the invoke `status`/`body`; for a one-way
 * activity it is a minimal post-handler acknowledgement (status 200, no body).
 */
export type ReplyFrame = {
  /** Always {@link WS_CONNECT_PROTOCOL_VERSION}. */
  readonly protocolVersion: number;
  /** Echoes the inbound {@link SocketActivityEnvelope.envelopeId}. */
  readonly envelopeId?: string;
  /** Bot's client id, echoed for APX routing/validation. */
  readonly botKey?: string;
  /** HTTP-style status for the invoke result or delivery ack. */
  readonly status: number;
  /** Invoke response body; omitted for a bare acknowledgement. */
  readonly body?: unknown;
  /** When the reply was produced (epoch ms), for latency telemetry. */
  readonly ts?: number;
  /** When the envelope was received (epoch ms), echoed for telemetry. */
  readonly recvAt?: number;
};

/**
 * Abstraction over the underlying socket so the server can be unit-tested
 * without a live SignalR connection. The default implementation wraps
 * `@microsoft/signalr`.
 */
export interface ISocketConnection {
  /**
   * Open the connection and resolve once the readiness contract
   * (`SocketReady`) is satisfied. Rejects if the socket fails to open or
   * readiness is not reached within the configured timeout.
   */
  start(): Promise<void>;

  /** Close the connection and stop any reconnect attempts. */
  stop(): Promise<void>;
}

/**
 * Callbacks the server supplies to a {@link SocketConnectionFactory} so the
 * connection can drive the server without the server knowing the transport.
 */
export type SocketConnectionHandlers = {
  /**
   * Handle one inbound envelope and resolve with the reply frame to return over
   * client results, or `undefined` to send no reply.
   */
  readonly onActivity: (envelope: SocketActivityEnvelope) => Promise<ReplyFrame | undefined>;
  /** Called when APX pushes the `SocketReady` readiness frame. */
  readonly onReady: (frame: SocketReadyFrame) => void;
  /** Called when the socket drops (a reconnect may follow). */
  readonly onDisconnected: (error?: Error) => void;
  /** Called when the socket reconnects and re-establishes its group. */
  readonly onReconnected: () => void;
};

/**
 * Creates an {@link ISocketConnection}. The default factory negotiates through
 * APX and opens a `@microsoft/signalr` connection; tests can supply their own.
 */
export type SocketConnectionFactory = (
  context: SocketConnectionContext,
  handlers: SocketConnectionHandlers
) => ISocketConnection;

/**
 * Everything a {@link SocketConnectionFactory} needs to negotiate and open a
 * connection.
 */
export type SocketConnectionContext = {
  /** Resolved negotiate URL (`{negotiateBaseUrl}/v3/websockets/connect`). */
  readonly negotiateUrl: string;
  /**
   * Acquire the Bot Framework access token used to authenticate the negotiate
   * request. Reuses the app's existing credentials.
   */
  readonly getBotToken: () => Promise<string>;
  /** Readiness timeout in milliseconds. */
  readonly readinessTimeoutMs: number;
  /** Reconnect back-off schedule in milliseconds. */
  readonly reconnectDelaysMs: readonly number[];
};
