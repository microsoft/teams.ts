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
 */
export interface IRouteConfig {
  method: string;
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
   * Register a route with the adapter
   * The adapter handles framework-specific routing logic and provides helpers to the handler
   * @param config Route configuration with method, path, and handler
   */
  registerRoute(config: IRouteConfig): void;

  /**
   * Serve static files from a directory
   * @param path URL path prefix (e.g., '/static')
   * @param directory File system directory to serve from
   */
  serveStatic(path: string, directory: string): void;

  /**
   * Framework-specific initialization
   * Called during HttpServer.ensureInitialized()
   * Example: Next.js needs nextApp.prepare()
   * Throw if not needed
   */
  initialize(): Promise<void>;

  /**
   * Start the server
   * Called during HttpServer.start()
   * Throw if server is user-provided and cannot be started
   */
  start(port: number): Promise<void>;
}
