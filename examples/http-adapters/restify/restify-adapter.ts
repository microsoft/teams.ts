import restify from 'restify';
import { HttpMethod, IHttpServerAdapter, HttpRouteHandler } from '@microsoft/teams.apps';

/**
 * Restify adapter for HttpServer
 *
 * Restify was the default HTTP server used by the Bot Framework JS SDK.
 * This adapter shows how to use it with teams.ts.
 *
 * Usage:
 *   const adapter = new RestifyAdapter();
 *   const app = new App({ httpServerAdapter: adapter });
 *   await app.start(3978);
 */
export class RestifyAdapter implements IHttpServerAdapter {
  protected server: restify.Server;

  constructor(server?: restify.Server) {
    this.server = server || restify.createServer();
    this.server.use(restify.plugins.bodyParser());
  }

  /**
   * Get the Restify server instance for adding custom routes/plugins
   */
  get instance(): restify.Server {
    return this.server;
  }

  /**
   * Register a route handler for a given HTTP method and path
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    const m = method.toLowerCase() as Lowercase<HttpMethod>;
    this.server[m](path, async (req: restify.Request, res: restify.Response) => {
      try {
        const response = await handler({
          body: req.body,
          headers: req.headers as Record<string, string | string[]>
        });
        res.send(response.status, response.body);
      } catch (err) {
        res.send(500, { error: 'Internal server error' });
      }
    });
  }

  /**
   * Start the server
   */
  async start(port: number): Promise<void> {
    return new Promise<void>((resolve) => {
      this.server.listen(port, () => resolve());
    });
  }

  /**
   * Stop the server
   */
  async stop(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.server.close(() => resolve());
    });
  }
}
