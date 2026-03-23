import http from 'http';

import cors from 'cors';
import express from 'express';

import pkg from '../../../package.json';
import { ExpressAdapter } from '../../http';
import { HttpServer } from '../../http/http-server';
import { Plugin } from '../../types';

/**
 * @deprecated Use the httpServerAdapter option instead:
 *   new App({ httpServerAdapter: new ExpressAdapter() })
 *
 * This wrapper will be removed in a future version.
 *
 * NOTE: This plugin is named "HttpPlugin" for historical reasons and backwards compatibility.
 * It is the default HTTP plugin that uses Express as the underlying framework.
 */
@Plugin({
  name: 'http',
  version: pkg.version,
  description: 'Deprecated: Use httpServerAdapter option instead',
})
export class HttpPlugin {
  // Expose Express methods for backwards compatibility
  readonly get: express.Application['get'];
  readonly post: express.Application['post'];
  readonly patch: express.Application['patch'];
  readonly put: express.Application['put'];
  readonly delete: express.Application['delete'];
  readonly route: express.Application['route'];
  readonly use: express.Application['use'];

  protected expressAdapter: ExpressAdapter;
  protected server: HttpServer;

  constructor(server?: http.Server, options?: { skipAuth?: boolean }) {
    this.expressAdapter = new ExpressAdapter(server);
    this.server = new HttpServer(this.expressAdapter, options);

    // Expose Express methods
    this.get = this.expressAdapter.get;
    this.post = this.expressAdapter.post;
    this.patch = this.expressAdapter.patch;
    this.put = this.expressAdapter.put;
    this.delete = this.expressAdapter.delete;
    this.route = this.expressAdapter.route;
    this.use = this.expressAdapter.use;
  }

  /**
   * App.constructor calls this to extract the HttpServer
   * @internal
   */
  asServer(): HttpServer {
    return this.server;
  }

  /**
   * Plugin lifecycle hook
   */
  async onInit() {
    // TODO: Setting cors globally and body parsing for all routes in /api
    // is actually a mistake. When HttpPlugin is officially deprecated, this
    // behavior will go away as well.
    this.use(cors());
    this.use('/api', express.json());
  }

  /**
   * serve static files
   * @param path the url path to serve
   * @param dist the dist file path to serve
   */
  static(path: string, dist: string) {
    this.expressAdapter.serveStatic(path, dist);
    return this;
  }
}
