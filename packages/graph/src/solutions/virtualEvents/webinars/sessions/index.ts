import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AttendanceReportsClient } from './attendanceReports';

/**
 * /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions
 * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
 */
export class SessionsClient {
  protected baseUrl = '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventWebinarId: string,
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
   * `/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}/attendanceReports`
   *
   * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
   */
  attendanceReports(virtualEventSessionId: string) {
    return new AttendanceReportsClient(virtualEventSessionId, this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions`
   *
   * Get a list of all virtualEventSession summary objects under a virtual event. A session summary contains only the endDateTime, id, joinWebUrl, startDateTime, and subject of a virtual event session. The rest of session properties will be null. Currently, the following virtual event types are supported: 
- virtualEventTownhall
- virtualEventWebinar
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}`
   *
   * Read the properties and relationships of a virtualEventSession object.  Currently, the following virtual event types are supported: 
- virtualEventTownhall
- virtualEventWebinar
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions',
      [{ name: 'virtualEventWebinar-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['response']
      );
  }
}
