import http from 'http';

import cors from 'cors';
import express from 'express';

import { IHttpAdapter, IRouteConfig } from './adapter';

/**
 * Express adapter for HttpServer
 *
 * Handles Express-specific HTTP framework concerns:
 * - Express app creation and middleware setup
 * - Route registration via Express routing
 * - Request/response data extraction and sending
 * - Server lifecycle management
 */
export class ExpressAdapter implements IHttpAdapter {
  // Expose Express methods for backwards compatibility
  readonly get: express.Application['get'];
  readonly post: express.Application['post'];
  readonly patch: express.Application['patch'];
  readonly put: express.Application['put'];
  readonly delete: express.Application['delete'];
  readonly route: express.Application['route'];
  readonly use: express.Application['use'];

  protected express: express.Application;
  protected server: http.Server;

  constructor(server?: http.Server) {
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
   * Register a POST route handler with Express
   * All routes are POST-only (Teams bot protocol uses POST)
   */
  registerRouteHandler(config: IRouteConfig): void {
    const { path, handler } = config;

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

    // Register as POST route
    this.express.post(path, expressHandler);
  }

  /**
   * Initialize the adapter
   * No-op for Express
   */
  async initialize(): Promise<void> {
    // No initialization needed for Express
  }

  /**
   * Start the server listening on the specified port
   */
  async start(port: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.server.listen(port, () => {
        resolve();
      });
      this.server.once('error', reject);
    });
  }

  /**
   * Serve static files from a directory
   */
  serveStatic(path: string, directory: string): void {
    this.express.use(path, express.static(directory));
  }

  /**
   * Stop the server and close all connections
   */
  async stop(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
