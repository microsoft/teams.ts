import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './base-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base
 * Provides operations to manage the base property of the microsoft.graph.contentType entity.
 */
export class BaseClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base';
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
   * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base`
   *
   * Parent contentType from which this content type is derived.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base',
      [
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
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['response']
      );
  }
}
