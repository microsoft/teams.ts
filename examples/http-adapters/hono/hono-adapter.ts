import { Hono, Context } from 'hono';
import { IHttpAdapter, IRouteConfig } from '@microsoft/teams.apps/dist/http/adapter';

/**
 * Hono adapter for HttpServer
 *
 * Wraps an existing Hono app to add Teams bot routes.
 * Server lifecycle (start/stop) is managed by the user externally.
 *
 * Usage:
 *   const hono = new Hono();
 *   const app = new App({ httpAdapter: new HonoAdapter(hono) });
 *   await app.initialize();
 *   // Start your Hono server separately with serve() or @hono/node-server
 */
export class HonoAdapter implements IHttpAdapter {
  protected hono: Hono;

  /**
   * Create adapter with your existing Hono app
   * @param hono Your Hono app with your custom routes
   */
  constructor(hono: Hono) {
    this.hono = hono;
  }

  /**
   * Register a POST route handler with Hono
   * All routes are POST-only (Teams bot protocol uses POST)
   */
  registerRouteHandler(config: IRouteConfig): void {
    const { path, handler } = config;

    // Convert handler to Hono handler signature
    const honoHandler = async (c: Context) => {
      try {
        // Parse JSON body
        const body = await c.req.json().catch(() => ({}));
        const headers = Object.fromEntries(c.req.raw.headers.entries());

        let responseData: { status: number; body: any } | undefined;

        // Provide helpers to the handler
        await handler({
          extractRequestData: () => ({
            body,
            headers
          }),
          sendResponse: (response) => {
            responseData = response;
          }
        });

        // Send the response
        if (responseData) {
          return c.json(responseData.body, responseData.status as any);
        } else {
          return c.json({ error: 'No response provided' }, 500);
        }
      } catch (err) {
        console.error('Hono handler error:', err);
        return c.json({ error: 'Internal server error' }, 500);
      }
    };

    // Register as POST route
    this.hono.post(path, honoHandler);
  }

  /**
   * Serve static files from a directory
   * Note: For production, consider using Hono's built-in static middleware
   * or a CDN for better performance
   */
  serveStatic(path: string, directory: string): void {
    // Hono's static file serving
    this.hono.get(`${path}/*`, async (c) => {
      const filePath = c.req.path.replace(path, directory);
      try {
        const fs = await import('fs/promises');
        const content = await fs.readFile(filePath);
        return c.body(content);
      } catch {
        return c.notFound();
      }
    });
  }
}
