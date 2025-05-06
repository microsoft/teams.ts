import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AllTimeClient } from './allTime';
import { ItemActivityStatsClient } from './itemActivityStats';
import { LastSevenDaysClient } from './lastSevenDays';

/**
 * /sites/{site-id}/analytics
 * Provides operations to manage the analytics property of the microsoft.graph.site entity.
 */
export class AnalyticsClient {
  protected baseUrl = '/sites/{site-id}/analytics';
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
   * `/sites/{site-id}/analytics/allTime`
   *
   * Provides operations to manage the allTime property of the microsoft.graph.itemAnalytics entity.
   */
  get allTime() {
    return new AllTimeClient(this.http);
  }

  /**
   * `/sites/{site-id}/analytics/itemActivityStats`
   *
   * Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity.
   */
  get itemActivityStats() {
    return new ItemActivityStatsClient(this.http);
  }

  /**
   * `/sites/{site-id}/analytics/lastSevenDays`
   *
   * Provides operations to manage the lastSevenDays property of the microsoft.graph.itemAnalytics entity.
   */
  get lastSevenDays() {
    return new LastSevenDaysClient(this.http);
  }

  /**
   * `DELETE /sites/{site-id}/analytics`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/analytics']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /sites/{site-id}/analytics']['response']);
  }

  /**
   * `GET /sites/{site-id}/analytics`
   *
   * Analytics about the view activities that took place on this site.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/analytics']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/analytics',
      [
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
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/analytics']['response']);
  }

  /**
   * `PATCH /sites/{site-id}/analytics`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/analytics']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/analytics']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/analytics', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /sites/{site-id}/analytics']['response']);
  }
}
