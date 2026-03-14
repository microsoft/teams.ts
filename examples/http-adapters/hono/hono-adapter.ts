import { Hono, Context } from 'hono';
import type { StatusCode } from 'hono/utils/http-status';
import { HttpMethod, IHttpServerAdapter, HttpRouteHandler } from '@microsoft/teams.apps';

/**
 * Hono adapter for HttpServer
 *
 * Wraps an existing Hono app to add Teams bot routes.
 * Server lifecycle (start/stop) is managed by the user externally.
 *
 * Usage:
 *   const hono = new Hono();
 *   const app = new App({ httpServerAdapter: new HonoAdapter(hono) });
 *   await app.initialize();
 *   // Start your Hono server separately with serve() or @hono/node-server
 */
export class HonoAdapter implements IHttpServerAdapter {
  protected hono: Hono;

  /**
   * Create adapter with your existing Hono app
   * @param hono Your Hono app with your custom routes
   */
  constructor(hono: Hono) {
    this.hono = hono;
  }

  /**
   * Register a route handler for a given HTTP method and path
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    const m = method.toLowerCase() as Lowercase<HttpMethod>;
    this.hono[m](path, async (c: Context) => {
      const body = await c.req.json().catch(() => ({}));
      const headers = Object.fromEntries(c.req.raw.headers.entries());
      const response = await handler({ body, headers });
      return c.json(response.body as object, response.status as StatusCode);
    });
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
