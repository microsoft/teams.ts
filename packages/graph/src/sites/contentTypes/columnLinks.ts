import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './columnLinks-types.ts';

/**
 * /sites/{site-id}/contentTypes/{contentType-id}/columnLinks
 * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
 */
export class ColumnLinksClient {
  protected baseUrl = '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks';
  protected http: http.Client;

  constructor(
    protected readonly contentTypeId: string,
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
   * `DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
        { name: 'columnLink-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'contentType-id': this.contentTypeId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks`
   *
   * The collection of columns that are required by this content type.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
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
        { name: 'contentType-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'contentType-id': this.contentTypeId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   * The collection of columns that are required by this content type.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
        { name: 'columnLink-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'contentType-id': this.contentTypeId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
        { name: 'columnLink-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'contentType-id': this.contentTypeId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['body'],
    params?: Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
      [
        { name: 'site-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'contentType-id': this.contentTypeId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['response']
      );
  }
}
