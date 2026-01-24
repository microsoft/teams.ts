import http from 'http';

import express from 'express';

import pkg from '../../../package.json';
import { Plugin } from '../../types';

import { ExpressAdapter } from './express-adapter';
import { HttpServer } from './http-server';

/**
 * @deprecated Will be deprecated. Use HttpServer instead:
 *   new App({ server: new HttpServer(new ExpressAdapter()) })
 *
 * This wrapper will be removed in a few patch versions.
 *
 * NOTE: This plugin is named "HttpPlugin" for historical reasons and backwards compatibility.
 * It is the default HTTP plugin that uses Express as the underlying framework.
 */
@Plugin({
  name: 'http',
  version: pkg.version,
  description: 'Will be deprecated: Use HttpServer with server option instead',
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
  protected _server: HttpServer;

  constructor(server?: http.Server, options?: { skipAuth?: boolean }) {
    this.expressAdapter = new ExpressAdapter(server);
    this._server = new HttpServer(this.expressAdapter, options);

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
    return this._server;
  }

  /**
   * Plugin lifecycle hook
   */
  async onInit() {
    // No-op
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
