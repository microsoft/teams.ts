export interface IHttpServerRequest {
  readonly body: unknown;
  readonly headers: Record<string, string | string[]>;
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
 * — `serveStatic` and non-messaging `registerRoute` paths.
 */
// Only POST is needed today (Teams bot protocol + remote functions).
// This may become a union (e.g., 'GET' | 'POST' | ...) if the need comes up.
export type HttpMethod = 'POST';

export interface IHttpServerAdapter {
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
