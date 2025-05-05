import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { EventsClient } from './events';
import { TownhallsClient } from './townhalls';
import { WebinarsClient } from './webinars';

/**
 * /solutions/virtualEvents
 * Provides operations to manage the virtualEvents property of the microsoft.graph.solutionsRoot entity.
 */
export class VirtualEventsClient {
  protected baseUrl = '/solutions/virtualEvents';
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
   * `/solutions/virtualEvents/events`
   *
   * Provides operations to manage the events property of the microsoft.graph.virtualEventsRoot entity.
   */
  get events() {
    return new EventsClient(this.http);
  }

  /**
   * `/solutions/virtualEvents/townhalls`
   *
   * Provides operations to manage the townhalls property of the microsoft.graph.virtualEventsRoot entity.
   */
  get townhalls() {
    return new TownhallsClient(this.http);
  }

  /**
   * `/solutions/virtualEvents/webinars`
   *
   * Provides operations to manage the webinars property of the microsoft.graph.virtualEventsRoot entity.
   */
  get webinars() {
    return new WebinarsClient(this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/virtualEvents', [{ name: 'If-Match', in: 'header' }], {
      ...(params || {}),
    });

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /solutions/virtualEvents']['response']);
  }

  /**
   * `GET /solutions/virtualEvents`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /solutions/virtualEvents']['response']);
  }

  /**
   * `PATCH /solutions/virtualEvents`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/virtualEvents', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /solutions/virtualEvents']['response']);
  }
}
