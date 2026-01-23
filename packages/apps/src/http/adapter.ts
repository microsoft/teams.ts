/**
 * Helpers provided to route handlers
 */
export interface IRequestHelpers {
  /**
   * Extract standardized request data from the framework request
   */
  extractRequestData: () => {
    body: any;
    headers: Record<string, string>;
  };

  /**
   * Send standardized response using the framework response
   */
  sendResponse: (response: { status: number; body: any }) => void;
}

/**
 * Configuration for registering a route with the adapter
 * All routes are POST only (Teams bot protocol uses POST)
 */
export interface IRouteConfig {
  path: string;
  handler: (helpers: IRequestHelpers) => Promise<void>;
}

/**
 * Adapter interface for different HTTP frameworks
 *
 * Adapters handle framework-specific HTTP concerns while HttpServer
 * handles Teams protocol logic (JWT validation, activity processing, etc.)
 */
export interface IHttpAdapter {
  /**
   * Register a POST route with the adapter
   * All routes are POST-only (Teams bot protocol uses POST)
   * The adapter handles framework-specific routing logic and provides helpers to the handler
   * @param config Route configuration with path and handler
   */
  registerRouteHandler(config: IRouteConfig): void;

  /**
   * Serve static files from a directory
   * Primarily used for serving static files like for tabs
   * @param path URL path prefix (e.g., '/static')
   * @param directory File system directory to serve from
   */
  serveStatic?(path: string, directory: string): void;

  /**
   * Optional framework-specific initialization
   * Called when app.initialize() or app.start() is invoked if any prep is needed
   */
  initialize?(): Promise<void>;

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
