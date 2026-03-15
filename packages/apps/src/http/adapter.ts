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
 * Adapter interface for different HTTP frameworks
 *
 * Adapters handle framework-specific HTTP concerns while HttpServer
 * handles Teams protocol logic (JWT validation, activity processing, etc.)
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
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void;

  /**
   * Serve static files from a directory
   * Primarily used for serving static files like for tabs, or static pages via MessageExtensions and Dialogs
   * @param path URL path prefix (e.g., '/static')
   * @param directory File system directory to serve from
   */
  serveStatic?(path: string, directory: string): void;

  /**
   * Start the server listening to incoming requests
   * Not needed if app.start() is not called
   * @param port Port number to listen on
   */
  start?(port: number): Promise<void>;

  /**
   * Stop the server from listening and perform any cleanup that needs to be done
   */
  stop?(): Promise<void>;
}
