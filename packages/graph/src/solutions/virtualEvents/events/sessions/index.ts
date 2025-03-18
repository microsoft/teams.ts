import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AttendanceReportsClient } from './attendanceReports';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true, arrayFormat: 'comma' })}`;
}

/**
 * /solutions/virtualEvents/events/{virtualEvent-id}/sessions
 * Provides operations to manage the sessions property of the microsoft.graph.virtualEvent entity.
 */
export class SessionsClient {
  protected baseUrl = '/solutions/virtualEvents/events/{virtualEvent-id}/sessions';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}/attendanceReports`
   *
   * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
   */
  attendanceReports(virtualEventSessionId: string) {
    return new AttendanceReportsClient(virtualEventSessionId, this.http);
  }

  /**
   * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEvent-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions`
   *
   * The sessions for the virtual event.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEvent-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
   *
   * The sessions for the virtual event.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEvent-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
      [
        { name: 'virtualEvent-id', in: 'path' },
        { name: 'virtualEventSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
      [{ name: 'virtualEvent-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['response']
      );
  }
}
