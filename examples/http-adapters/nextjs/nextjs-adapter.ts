import http from 'http';
import next from 'next';
import { IHttpAdapter, IRouteConfig } from '@microsoft/teams.apps/dist/http/adapter';

/**
 * Next.js adapter for HttpServer
 *
 * Handles Next.js-specific concerns:
 * - Next.js app preparation and initialization
 * - Route interception for Teams bot endpoints
 * - Fallback to Next.js handler for all other routes
 *
 * Usage:
 *   const server = http.createServer();
 *   const adapter = new NextjsAdapter(server);
 *   const app = new App({ httpAdapter: adapter });
 *   await app.initialize();
 *   server.listen(3978);
 */
export class NextjsAdapter implements IHttpAdapter {
  protected nextApp: ReturnType<typeof next>;
  protected server: http.Server;
  protected routes: Map<string, IRouteConfig> = new Map();
  protected dev: boolean;
  protected requestHandlerAttached: boolean = false;

  constructor(server: http.Server, options?: { dev?: boolean; dir?: string }) {
    this.server = server;
    this.dev = options?.dev ?? process.env.NODE_ENV !== 'production';

    // Create Next.js app
    this.nextApp = next({
      dev: this.dev,
      dir: options?.dir
    });
  }

  /**
   * Register a POST route handler with the adapter
   * Routes are stored and handled before Next.js gets the request
   * All routes are POST-only (Teams bot protocol uses POST)
   */
  registerRouteHandler(config: IRouteConfig): void {
    const key = `POST:${config.path}`;
    this.routes.set(key, config);
  }

  /**
   * Serve static files from a directory
   * Note: Next.js handles static files in public/ directory automatically
   * This is for serving additional static directories
   */
  serveStatic(_path: string, _directory: string): void {
    // Next.js handles static files automatically via public/ directory
    // For custom static file serving, users should use Next.js's built-in mechanisms
    // This method is a no-op for Next.js adapter
    throw new Error(
      'serveStatic() is not supported in Next.js adapter. ' +
      'Use Next.js built-in static file serving (public/ directory) instead.'
    );
  }

  /**
   * Initialize Next.js - prepare the Next.js app
   */
  async initialize(): Promise<void> {
    await this.nextApp.prepare();

    // Only attach the request handler once
    if (this.requestHandlerAttached) {
      return;
    }

    // Create request handler that checks our routes first, then falls back to Next.js
    const nextHandler = this.nextApp.getRequestHandler();
    const requestHandler = async (req: http.IncomingMessage, res: http.ServerResponse) => {
      const method = req.method?.toUpperCase() || 'GET';
      const url = req.url || '/';
      const path = url.split('?')[0]; // Remove query string

      // Check if we have a registered route for this path
      const key = `${method}:${path}`;
      const route = this.routes.get(key);

      if (route) {
        // Handle with our route handler
        try {
          // Parse body for POST/PUT/PATCH requests
          let body: any = {};
          if (['POST', 'PUT', 'PATCH'].includes(method)) {
            body = await this.parseBody(req);
          }

          const headers = req.headers as Record<string, string>;

          await route.handler({
            extractRequestData: () => ({ body, headers }),
            sendResponse: (response) => {
              res.statusCode = response.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(response.body));
            }
          });
        } catch (err) {
          console.error('Route handler error:', err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal server error' }));
        }
      } else {
        // Let Next.js handle it
        await nextHandler(req, res);
      }
    };

    // Attach request handler to the server
    this.server.on('request', requestHandler);
    this.requestHandlerAttached = true;
  }

  /**
   * Parse request body
   */
  private async parseBody(req: http.IncomingMessage): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk.toString();
      });
      req.on('end', () => {
        try {
          resolve(data ? JSON.parse(data) : {});
        } catch (err) {
          reject(err);
        }
      });
      req.on('error', reject);
    });
  }
}
