import { CloudEnvironment, Credentials, IToken } from '@microsoft/teams.api';

/**
 * App-level dependencies handed to the server (and forwarded to its adapter) at
 * initialization, before {@link IHttpServerAdapter.start}.
 */
export type IHttpServerInitializeDeps = {
  readonly credentials?: Credentials;
  readonly cloud?: CloudEnvironment;
};

export interface IHttpServerRequest {
  readonly body: unknown;
  readonly headers: Record<string, string | string[]>;

  /**
   * Pre-authenticated caller identity, supplied by transports that establish
   * authenticity at the connection level rather than per request (e.g. Socket
   * Mode, which authenticates once during its negotiate handshake and carries no
   * per-frame JWT). When set, {@link IHttpServer} trusts it and skips per-request
   * token validation for this request.
   *
   * HTTP adapters leave this `undefined` so the normal `Authorization`-header JWT
   * validation runs. Only trusted transport adapters should populate it — doing
   * so bypasses inbound token validation, exactly like terminating auth in a
   * custom adapter.
   */
  readonly token?: IToken;
}

export interface IHttpServerResponse {
  readonly status: number;
  readonly body?: unknown;
}

export type HttpRouteHandler = (
  request: IHttpServerRequest
) => Promise<IHttpServerResponse>;

/**
 * Adapter interface for different inbound transports.
 *
 * This is the transport seam: {@link IHttpServer} owns the Teams protocol logic
 * (token validation, activity processing, invoke responses) and delegates all
 * wire concerns to an adapter. `ExpressAdapter` implements it for HTTP; other
 * transports (e.g. Socket Mode) implement it too and live *inside* a single
 * `HttpServer`. A non-HTTP transport may treat browser-oriented calls as no-ops
 * — `serveStatic` and non-messaging `registerRoute` paths — and deliver
 * pre-authenticated requests via {@link IHttpServerRequest.token}.
 */
// Only POST is needed today (Teams bot protocol + remote functions).
// This may become a union (e.g., 'GET' | 'POST' | ...) if the need comes up.
export type HttpMethod = 'POST';

export interface IHttpServerAdapter {
  /**
   * Initialize the adapter with app-level dependencies, before {@link start}.
   * Called by `HttpServer.initialize()`, which forwards the same deps it
   * receives from `App.initialize()`.
   *
   * Optional: HTTP adapters that need nothing at init (e.g. `ExpressAdapter`)
   * omit it. Transports that authenticate the connection (e.g. Socket Mode)
   * implement it to receive `credentials`/`cloud` through the seam rather than
   * out of band.
   */
  initialize?(deps: IHttpServerInitializeDeps): Promise<void>;

  /**
   * Register a route handler for a given HTTP method and path
   * @param method HTTP method
   * @param path URL path (e.g., '/api/messages')
   * @param handler Pure function: ({ body, headers }) → { status, body }
   *
   * Non-HTTP transports register only the messaging endpoint and may no-op other
   * paths (e.g. `/api/functions/*`), which then require an HTTP transport to serve.
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void;

  /**
   * Serve static files from a directory
   * Primarily used for serving static files like for tabs, or static pages via MessageExtensions and Dialogs
   * @param path URL path prefix (e.g., '/static')
   * @param directory File system directory to serve from
   *
   * Optional: non-HTTP transports may omit or no-op this (tabs require an HTTP transport).
   */
  serveStatic?(path: string, directory: string): void;

  /**
   * Start the server listening to incoming requests
   * Not needed if app.start() is not called
   * @param port Port number to listen on
   */
  start?(port: number | string): Promise<void>;

  /**
   * Stop the server from listening and perform any cleanup that needs to be done
   */
  stop?(): Promise<void>;
}
