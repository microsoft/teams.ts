import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AttendanceReportsClient } from './attendanceReports';

/**
 * /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions
 * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
 */
export class SessionsClient {
  protected baseUrl = '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventTownhallId: string,
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
   * `/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}/attendanceReports`
   *
   * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
   */
  attendanceReports(virtualEventSessionId: string) {
    return new AttendanceReportsClient(virtualEventSessionId, this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventTownhall-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions`
   *
   * The sessions for the virtual event.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventTownhall-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}`
   *
   * The sessions for the virtual event.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventTownhall-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
      [
        { name: 'virtualEventTownhall-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
      [{ name: 'virtualEventTownhall-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['response']
      );
  }
}
