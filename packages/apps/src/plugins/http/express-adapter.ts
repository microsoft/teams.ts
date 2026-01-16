import http from 'http';
import cors from 'cors';
import express from 'express';
import { IHttpAdapter, IRouteConfig } from './adapter';

/**
 * Express adapter for ConfigurableHttpPlugin
 *
 * Handles Express-specific HTTP framework concerns:
 * - Express app creation and middleware setup
 * - Route registration via Express routing
 * - Request/response data extraction and sending
 * - Server lifecycle management
 */
export class ExpressAdapter implements IHttpAdapter {
  protected express: express.Application;
  protected server: http.Server;
  protected isUserProvidedServer: boolean;

  // Expose Express methods for backwards compatibility
  readonly get: express.Application['get'];
  readonly post: express.Application['post'];
  readonly patch: express.Application['patch'];
  readonly put: express.Application['put'];
  readonly delete: express.Application['delete'];
  readonly route: express.Application['route'];
  readonly use: express.Application['use'];

  constructor(server?: http.Server) {
    this.isUserProvidedServer = !!server;
    this.express = express();
    this.server = server || http.createServer();
    this.server.on('request', this.express);

    // Bind Express methods
    this.get = this.express.get.bind(this.express);
    this.post = this.express.post.bind(this.express);
    this.patch = this.express.patch.bind(this.express);
    this.put = this.express.put.bind(this.express);
    this.delete = this.express.delete.bind(this.express);
    this.route = this.express.route.bind(this.express);
    this.use = this.express.use.bind(this.express);

    // Setup middleware
    this.express.use(cors());
    this.express.use('/api*', express.json());
  }

  /**
   * Get the underlying HTTP server
   */
  getServer(): http.Server {
    return this.server;
  }

  /**
   * Register a route with Express
   */
  registerRoute(config: IRouteConfig): void {
    const { method, path, handler } = config;

    // Convert handler to Express middleware signature
    const expressHandler = async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        // Provide helpers to the handler
        await handler({
          extractRequestData: () => ({
            body: req.body,
            headers: req.headers as Record<string, string>
          }),
          sendResponse: (response) => {
            res.status(response.status).send(response.body);
          }
        });
      } catch (err) {
        next(err);
      }
    };

    // Register with Express using the appropriate method
    switch (method.toLowerCase()) {
      case 'get':
        this.express.get(path, expressHandler);
        break;
      case 'post':
        this.express.post(path, expressHandler);
        break;
      case 'put':
        this.express.put(path, expressHandler);
        break;
      case 'patch':
        this.express.patch(path, expressHandler);
        break;
      case 'delete':
        this.express.delete(path, expressHandler);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }

  /**
   * Start the server
   * Throws if server was user-provided
   */
  async start(port: number): Promise<void> {
    if (this.isUserProvidedServer) {
      throw new Error(
        'Cannot call start() when server was provided by user. ' +
        'User should call server.listen() directly.'
      );
    }

    return new Promise<void>((resolve, reject) => {
      this.server.listen(port, () => {
        resolve();
      });
      this.server.once('error', reject);
    });
  }

  /**
   * Serve static files
   * @param path the url path to serve
   * @param dist the dist file path to serve
   */
  static(path: string, dist: string): this {
    this.express.use(path, express.static(dist));
    return this;
  }
}
