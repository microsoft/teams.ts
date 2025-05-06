import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './analytics-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics
 * Provides operations to manage the analytics property of the microsoft.graph.listItem entity.
 */
export class AnalyticsClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics';
  protected http: http.Client;

  constructor(
    protected readonly listItemId: string,
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
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics`
   *
   * Analytics about the view activities that took place on this item.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'listItem-id': this.listItemId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics']['response']
      );
  }
}
