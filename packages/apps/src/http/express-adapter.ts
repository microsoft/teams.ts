import http from 'http';

import cors from 'cors';
import express from 'express';

import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { HttpMethod, IHttpServerAdapter, HttpRouteHandler } from './adapter';

/**
 * Express adapter for HttpServer
 *
 * Handles Express-specific HTTP framework concerns:
 * - Express app creation and middleware setup
 * - Route registration via Express routing
 * - Request/response data extraction and sending
 * - Server lifecycle management
 */
export class ExpressAdapter implements IHttpServerAdapter {
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
  protected logger: ILogger;
  protected onError?: (err: Error) => void;

  constructor(server?: http.Server, options?: { logger?: ILogger; onError?: (err: Error) => void }) {
    this.express = express();
    this.server = server || http.createServer();
    this.server.on('request', this.express);
    this.logger = options?.logger ?? new ConsoleLogger('ExpressAdapter');
    this.onError = options?.onError;

    // Bind Express methods
    this.get = this.express.get.bind(this.express);
    this.post = this.express.post.bind(this.express);
    this.patch = this.express.patch.bind(this.express);
    this.put = this.express.put.bind(this.express);
    this.delete = this.express.delete.bind(this.express);
    this.route = this.express.route.bind(this.express);
    this.use = this.express.use.bind(this.express);
  }

  /**
   * Register a route handler for a given HTTP method and path
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    if (method !== 'POST') {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }

    const expressHandler = async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const response = await handler({
          body: req.body,
          headers: req.headers as Record<string, string | string[]>
        });
        res.status(response.status).send(response.body);
      } catch (err) {
        next(err);
      }
    };

    this.express.post(path, express.json(), expressHandler);
  }

  /**
   * Start the server listening on the specified port
   */
  async start(port: number | string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Handle startup errors
      this.server.once('error', (err) => {
        if (this.onError) {
          this.onError(err);
        }
        reject(err);
      });

      this.server.listen(port, () => {
        this.logger.info(`listening on port ${port} 🚀`);

        // Set up persistent error listener after startup
        if (this.onError) {
          this.server.on('error', this.onError);
        }

        resolve();
      });
    });
  }

  /**
   * Serve static files from a directory
   */
  serveStatic(path: string, directory: string): void {
    this.express.use(path, cors(), express.static(directory));
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
          this.logger.info('server stopped');
          resolve();
        }
      });
    });
  }
}
