import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ActivitiesClient } from './activities';

/**
 * /sites/{site-id}/analytics/itemActivityStats
 * Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity.
 */
export class ItemActivityStatsClient {
  protected baseUrl = '/sites/{site-id}/analytics/itemActivityStats';
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
   * `/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
   *
   * Provides operations to manage the activities property of the microsoft.graph.itemActivityStat entity.
   */
  activities(itemActivityStatId: string) {
    return new ActivitiesClient(itemActivityStatId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'itemActivityStat-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/analytics/itemActivityStats`
   *
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/analytics/itemActivityStats']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats',
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
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/analytics/itemActivityStats']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
   *
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'itemActivityStat-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'itemActivityStat-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/analytics/itemActivityStats`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/analytics/itemActivityStats']['body'],
    params?: Endpoints['POST /sites/{site-id}/analytics/itemActivityStats']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats',
      [{ name: 'site-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/analytics/itemActivityStats']['response']
      );
  }
}
