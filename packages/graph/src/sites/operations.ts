import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './operations-types.ts';

/**
 * /sites/{site-id}/operations
 * Provides operations to manage the operations property of the microsoft.graph.site entity.
 */
export class OperationsClient {
  protected baseUrl = '/sites/{site-id}/operations';
  protected http: http.Client;

  constructor(
    protected readonly siteId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/operations/{richLongRunningOperation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'richLongRunningOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/operations`
   *
   * Get a list of rich long-running operations associated with a site.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/operations',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/operations']['response']);
  }

  /**
   * `GET /sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   * Get the status of a rich long-running operation on a site or a list.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/operations/{richLongRunningOperation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'richLongRunningOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/operations/{richLongRunningOperation-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'richLongRunningOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/operations`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/operations']['body'],
    params?: Endpoints['POST /sites/{site-id}/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/operations', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/operations']['response']);
  }
}
