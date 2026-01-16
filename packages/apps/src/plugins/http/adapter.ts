import http from 'http';

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
 * Adapters handle framework-specific HTTP concerns while ConfigurableHttpPlugin
 * handles Teams protocol logic (JWT validation, activity processing, etc.)
 */
export interface IHttpAdapter {
  /**
   * Get the underlying HTTP server
   * The adapter owns the server (creates it or accepts it from user)
   */
  getServer(): http.Server;

  /**
   * Register a route with the adapter
   * The adapter handles framework-specific routing logic and provides helpers to the handler
   * @param config Route configuration with method, path, and handler
   */
  registerRoute(config: IRouteConfig): void;

  /**
   * Optional: Framework-specific initialization
   * Called during ConfigurableHttpPlugin.initialize()
   * Example: Next.js needs nextApp.prepare()
   */
  initialize?(): Promise<void>;

  /**
   * Optional: Start the server
   * Called during ConfigurableHttpPlugin.start()
   * Should throw error if server is user-provided
   */
  start?(port: number): Promise<void>;
}
