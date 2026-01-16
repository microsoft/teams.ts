import http from 'http';

import express from 'express';

import pkg from '../../../package.json';
import { Plugin } from '../../types';

import { ConfigurableHttpPlugin } from './configurable-http-plugin';
import { ExpressAdapter } from './express-adapter';

/**
 * Receives activities via HTTP using Express
 *
 * NOTE: This plugin is named "HttpPlugin" for historical reasons and backwards compatibility.
 * It is the default HTTP plugin that uses Express as the underlying framework.
 *
 * This is a wrapper around ConfigurableHttpPlugin + ExpressAdapter for backwards compatibility.
 * For other frameworks (Hono, Next.js, etc.), use ConfigurableHttpPlugin with the appropriate adapter.
 */
@Plugin({
  name: 'http',
  version: pkg.version,
  description: 'the default plugin for receiving activities via HTTP',
})
export class HttpPlugin extends ConfigurableHttpPlugin {
  // Expose Express methods for backwards compatibility
  readonly get: express.Application['get'];
  readonly post: express.Application['post'];
  readonly patch: express.Application['patch'];
  readonly put: express.Application['put'];
  readonly delete: express.Application['delete'];
  readonly route: express.Application['route'];
  readonly use: express.Application['use'];

  protected expressAdapter: ExpressAdapter;

  constructor(server?: http.Server, options?: { skipAuth?: boolean }) {
    const expressAdapter = new ExpressAdapter(server);
    super(expressAdapter, options);

    this.expressAdapter = expressAdapter;

    // Expose Express methods
    this.get = expressAdapter.get;
    this.post = expressAdapter.post;
    this.patch = expressAdapter.patch;
    this.put = expressAdapter.put;
    this.delete = expressAdapter.delete;
    this.route = expressAdapter.route;
    this.use = expressAdapter.use;
  }

  /**
   * Override initialization to add manifest route (backwards compatibility)
   */
  protected async ensureInitialized() {
    if (this.initialized) {
      return;
    }

    // Call parent initialization (registers /api/messages)
    await super.ensureInitialized();

    // Register manifest route for backwards compatibility
    this.expressAdapter.registerRoute({
      method: 'get',
      path: '/',
      handler: async ({ sendResponse }) => {
        sendResponse({
          status: 200,
          body: this.manifest
        });
      }
    });
  }

  /**
   * serve static files
   * @param path the url path to serve
   * @param dist the dist file path to serve
   */
  static(path: string, dist: string) {
    this.expressAdapter.static(path, dist);
    return this;
  }
}
