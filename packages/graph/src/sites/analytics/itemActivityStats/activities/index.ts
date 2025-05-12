import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { DriveItemClient } from './driveItem';

/**
 * /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities
 * Provides operations to manage the activities property of the microsoft.graph.itemActivityStat entity.
 */
export class ActivitiesClient {
  protected baseUrl =
    '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities';
  protected http: http.Client;

  constructor(
    protected readonly itemActivityStatId: string,
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
   * `/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem`
   *
   * Provides operations to manage the driveItem property of the microsoft.graph.itemActivity entity.
   */
  driveItem(itemActivityId: string) {
    return new DriveItemClient(itemActivityId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'itemActivityStat-id', in: 'path' },
        { name: 'itemActivity-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'itemActivityStat-id': this.itemActivityStatId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
   *
   * Exposes the itemActivities represented in this itemActivityStat resource.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
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
        { name: 'itemActivityStat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'itemActivityStat-id': this.itemActivityStatId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
   *
   * Exposes the itemActivities represented in this itemActivityStat resource.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'itemActivityStat-id', in: 'path' },
        { name: 'itemActivity-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'itemActivityStat-id': this.itemActivityStatId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'itemActivityStat-id', in: 'path' },
        { name: 'itemActivity-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'itemActivityStat-id': this.itemActivityStatId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['body'],
    params?: Endpoints['POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities',
      [
        { name: 'site-id', in: 'path' },
        { name: 'itemActivityStat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'itemActivityStat-id': this.itemActivityStatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities']['response']
      );
  }
}
