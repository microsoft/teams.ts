/**
 * The Socket Mode protocol version teams.ts speaks. Every reply frame must carry
 * it so Teams backend service can detect a mismatch and fall back to HTTP. Bump only in lockstep
 * with Teams backend service's `SocketProtocol.CurrentVersion`.
 */
export const SOCKET_MODE_PROTOCOL_VERSION = 1;

/**
 * Default Teams backend service host used to negotiate the Socket Mode connection when no
 * {@link SocketModeOptions.negotiateBaseUrl} is provided. The negotiate route
 * (`/v3/websockets/connect`) is appended to this base.
 */
export const DEFAULT_SOCKET_MODE_NEGOTIATE_BASE_URL = 'https://botapi.skype.com';

/**
 * The negotiate route appended to the Teams backend service base URL. Teams backend service exposes the Socket Mode
 * handshake at `POST {base}/v3/websockets/connect`.
 */
export const SOCKET_MODE_NEGOTIATE_PATH = '/v3/websockets/connect';

/**
 * Lifecycle status of the {@link SocketModeAdapter} socket.
 *
 * - `idle` — created but not yet started.
 * - `connecting` — negotiating and opening the socket, or reconnecting.
 * - `ready` — socket is open AND the Teams backend service `SocketReady` readiness contract has
 *   been satisfied; inbound activities can be delivered.
 * - `disconnected` — the socket closed (a reconnect may be in progress).
 * - `stopped` — the server was stopped and will not reconnect.
 *
 * @experimental This API is in preview and may change in the future.
 */
export type SocketModeStatus =
  | 'idle'
  | 'connecting'
  | 'ready'
  | 'disconnected'
  | 'stopped';

/**
 * Options controlling the inbound Socket Mode transport, passed as
 * `new App({ socketMode: { ... } })`. Passing `socketMode: true` uses all
 * defaults.
 *
 * @experimental This API is in preview and may change in the future.
 */
export type SocketModeOptions = {
  /**
   * Base URL of the Teams backend service endpoint used to negotiate the socket. The negotiate
   * request is sent to `{negotiateBaseUrl}/v3/websockets/connect`.
   *
   * Defaults to {@link DEFAULT_SOCKET_MODE_NEGOTIATE_BASE_URL}. Override this to
   * target a regional or Canary Teams backend service ring
   * (e.g. `https://canary.botapi.skype.com/amer`).
   */
  readonly negotiateBaseUrl?: string;

  /**
   * Geographies to connect to. One independent socket is opened per geo, with
   * the geo appended as a path segment to the negotiate base
   * (`{negotiateBaseUrl}/{geo}/v3/websockets/connect`), so a single bot has
   * inbound coverage across regions — a conversation pinned to another geo is
   * still delivered over the socket instead of silently falling back to HTTP.
   *
   * Defaults to `['amer', 'emea', 'apac']`. Every listed geo must connect for
   * `App.start()` to succeed; each is then supervised independently, so one geo
   * dropping never affects delivery on the others. Pass a single empty string
   * (`['']`) to connect to the base negotiate URL with no geo segment. Must be
   * non-empty.
   *
   * @default ['amer', 'emea', 'apac']
   */
  readonly geos?: readonly string[];

  /**
   * How long, in milliseconds, to wait for Teams backend service's `SocketReady` frame after the
   * underlying socket connects before treating the connection as failed. The
   * connection is not considered usable until this readiness contract is
   * satisfied.
   *
   * @default 30000
   */
  readonly readinessTimeoutMs?: number;

  /**
   * Total time budget, in milliseconds, for establishing the *initial*
   * connection at `App.start()`. The first connect is retried with the same
   * back-off as reconnect until it succeeds or this budget is exhausted, at
   * which point `App.start()` rejects. After the first successful connection the
   * reconnect supervisor takes over and retries indefinitely until `App.stop()`.
   * Set to `0` to fail on the very first attempt.
   *
   * @default 30000
   */
  readonly startupTimeoutMs?: number;

  /**
   * Reconnect back-off schedule (milliseconds to wait before each reconnect
   * attempt) used by the self-driven reconnect supervisor. When omitted, a
   * capped exponential schedule with jitter is used (roughly 1s, 2s, 4s, 8s,
   * then 15s repeating). When provided, these delays are used in order and the
   * final value repeats until the socket reconnects. The supervisor keeps
   * retrying — with a fresh negotiate/token each attempt — until `App.stop()`.
   */
  readonly reconnectDelaysMs?: readonly number[];

  /**
   * **Experimental.** Also stand up an HTTP messaging endpoint alongside the
   * socket so Teams backend service can deliver inbound activities over either transport (it
   * decides per activity). The HTTP adapter is created implicitly. This is
   * inbound-only and a messaging sink: browser features Socket Mode disables
   * (`app.tab()`, `app.function()`, OAuth callbacks) stay unavailable. Set
   * `false` for a socket-only app.
   *
   * Delivery contract: each activity is delivered over **exactly one** transport
   * — the socket when it can deliver, otherwise HTTP — never both. There is no
   * duplicate delivery to guard against.
   *
   * @experimental Transitional for the Socket Mode rollout; may change or be
   * removed without a major-version bump.
   * @default true
   */
  readonly fallbackToHttp?: boolean;

  /**
   * How long, in milliseconds, `App.stop()` waits for in-flight activities to
   * finish during drain before closing the socket. New activities are refused
   * as soon as draining begins; already-admitted ones are given until this
   * deadline to complete and return their reply.
   *
   * @default 10000
   */
  readonly drainTimeoutMs?: number;

  /**
   * SignalR keep-alive ping interval in milliseconds — how often the client
   * pings the server while otherwise idle. Should stay comfortably below
   * {@link serverTimeoutMs}. Defaults to SignalR's built-in 15s.
   *
   * @default 15000
   */
  readonly keepAliveIntervalMs?: number;

  /**
   * SignalR server timeout in milliseconds — how long without an **inbound**
   * message before the connection is considered lost and torn down (triggering
   * a reconnect). SignalR only resets this on frames received from the server,
   * so it must be larger than the interval at which the server sends traffic or
   * keep-alives; too low a value causes needless reconnect churn on idle
   * connections. Defaults to SignalR's built-in 30s. Coordinate changes with
   * the service.
   *
   * @default 30000
   */
  readonly serverTimeoutMs?: number;
};

/**
 * Result of a successful Teams backend service negotiate call. Mirrors the Teams backend service response body.
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
 * The `SocketReady` frame Teams backend service pushes once the connection is registered in the
 * bot's group and inbound delivery can begin.
 */
export type SocketReadyFrame = {
  readonly botKey?: string;
  readonly connectionId?: string;
};

/**
 * The envelope Teams backend service delivers on the SignalR `Activity` client method. Field
 * casing may vary with the hub protocol, so always read via the
 * `readEnvelope*` helpers rather than by direct property access.
 */
export type SocketActivityEnvelope = {
  /** Protocol version Teams backend service used to encode this envelope. */
  readonly protocolVersion?: number;
  /** Correlation id echoed back on the reply frame. */
  readonly envelopeId?: string;
  /** `"invoke"` for invoke activities; the activity type otherwise. */
  readonly type?: string;
  /**
   * Whether Teams backend service expects a delivery acknowledgement. `true` for one-way
   * activities; invoke activities expect a full result instead.
   */
  readonly ackRequired?: boolean;
  /** The Bot Framework activity payload. */
  readonly payload?: unknown;
  /** Optional activity payload alias used by some Teams backend service builds. */
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
  /** Always {@link SOCKET_MODE_PROTOCOL_VERSION}. */
  readonly protocolVersion: number;
  /** Echoes the inbound {@link SocketActivityEnvelope.envelopeId}. */
  readonly envelopeId?: string;
  /** Bot's client id, echoed for Teams backend service routing/validation. */
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
 * Abstraction over a single underlying socket connection (one negotiate +
 * SignalR session) so the server can be unit-tested without a live SignalR
 * connection. The default implementation wraps `@microsoft/signalr`.
 *
 * A connection represents exactly one generation: it never reconnects itself.
 * When the socket drops it reports {@link SocketConnectionHandlers.onClosed} and
 * becomes terminal; the {@link SocketModeAdapter} supervisor decides whether to
 * negotiate a fresh connection.
 */
export interface ISocketConnection {
  /**
   * Open the connection and resolve once the readiness contract (`SocketReady`)
   * is satisfied. Rejects if the socket fails to open, readiness is not reached
   * within the configured timeout, or `signal` aborts first.
   *
   * @param signal aborts an in-progress negotiate/connect/readiness wait when
   *   the server is stopping, so a late-completing connect can't come up after
   *   shutdown.
   */
  start(signal?: AbortSignal): Promise<void>;

  /** Close the connection. Safe to call more than once. */
  stop(): Promise<void>;

  /**
   * Lifetime, in seconds, of the negotiate access token backing this
   * connection (from the negotiate response), or `undefined` when unknown. The
   * supervisor uses it to proactively renegotiate before the token expires.
   */
  readonly expiresInSeconds?: number;
}

/**
 * Callbacks the server supplies to the underlying {@link ISocketConnection} so
 * the connection can drive the server without the server knowing the transport.
 */
export type SocketConnectionHandlers = {
  /**
   * Handle one inbound envelope and resolve with the reply frame to return over
   * client results, or `undefined` to send no reply.
   */
  readonly onActivity: (envelope: SocketActivityEnvelope) => Promise<ReplyFrame | undefined>;
  /** Called when Teams backend service pushes the `SocketReady` readiness frame. */
  readonly onReady: (frame: SocketReadyFrame) => void;
  /**
   * Called once when the connection terminates (socket closed or lost). The
   * connection is terminal after this — the supervisor handles any reconnect by
   * building a new connection.
   */
  readonly onClosed: (error?: Error) => void;
};

/**
 * Everything the {@link ISocketConnection} needs to negotiate and open a single
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
  /** SignalR keep-alive ping interval in milliseconds. */
  readonly keepAliveIntervalMs: number;
  /** SignalR server timeout in milliseconds (connection considered lost after). */
  readonly serverTimeoutMs: number;
};
