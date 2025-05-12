import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './operations-types.ts';

/**
 * /sites/{site-id}/onenote/operations
 * Provides operations to manage the operations property of the microsoft.graph.onenote entity.
 */
export class OperationsClient {
  protected baseUrl = '/sites/{site-id}/onenote/operations';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'onenoteOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/operations`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/onenote/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/operations',
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
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/onenote/operations']['response']);
  }

  /**
   * `GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'onenoteOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'onenoteOperation-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/onenote/operations`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/operations']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/operations',
      [{ name: 'site-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/onenote/operations']['response']);
  }
}
