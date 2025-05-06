import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { SourceColumnClient } from './sourceColumn';

/**
 * /sites/{site-id}/columns
 * Provides operations to manage the columns property of the microsoft.graph.site entity.
 */
export class ColumnsClient {
  protected baseUrl = '/sites/{site-id}/columns';
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
   * `/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * Provides operations to manage the sourceColumn property of the microsoft.graph.columnDefinition entity.
   */
  sourceColumn(columnDefinitionId: string) {
    return new SourceColumnClient(columnDefinitionId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/columns/{columnDefinition-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/columns/{columnDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/columns/{columnDefinition-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'columnDefinition-id', in: 'path' },
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
          res.data as Endpoints['DELETE /sites/{site-id}/columns/{columnDefinition-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/columns`
   *
   * Get the collection of columns represented as columnDefinition resources in a site.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/columns']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/columns',
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
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/columns']['response']);
  }

  /**
   * `GET /sites/{site-id}/columns/{columnDefinition-id}`
   *
   * The collection of column definitions reusable across lists under this site.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/columns/{columnDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/columns/{columnDefinition-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'columnDefinition-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/columns/{columnDefinition-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/columns/{columnDefinition-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/columns/{columnDefinition-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'columnDefinition-id', in: 'path' },
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
          res.data as Endpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/columns`
   *
   * Create a column for a site with a request that specifies a columnDefinition.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/columns']['body'],
    params?: Endpoints['POST /sites/{site-id}/columns']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/columns', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/columns']['response']);
  }
}
