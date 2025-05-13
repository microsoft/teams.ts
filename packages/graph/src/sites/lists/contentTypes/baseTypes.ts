import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './baseTypes-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes
 * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
 */
export class BaseTypesClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes';
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
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes`
   *
   * The collection of content types that are ancestors of this content type.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes',
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
        { name: 'list-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}`
   *
   * The collection of content types that are ancestors of this content type.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
        { name: 'contentType-id1', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['response']
      );
  }
}
