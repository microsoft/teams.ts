import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './calendarPermissions-types.ts';

/**
 * /me/calendar/calendarPermissions
 * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
 */
export class CalendarPermissionsClient {
  protected baseUrl = '/me/calendar/calendarPermissions';
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
   * `DELETE /me/calendar/calendarPermissions/{calendarPermission-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarPermissions/{calendarPermission-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendarPermission-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
      );
  }

  /**
   * `GET /me/calendar/calendarPermissions`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  async list(
    params?: Endpoints['GET /me/calendar/calendarPermissions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarPermissions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/calendar/calendarPermissions']['response']);
  }

  /**
   * `GET /me/calendar/calendarPermissions/{calendarPermission-id}`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  async get(
    params?: Endpoints['GET /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarPermissions/{calendarPermission-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarPermission-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
      );
  }

  /**
   * `PATCH /me/calendar/calendarPermissions/{calendarPermission-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['body'],
    params?: Endpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarPermissions/{calendarPermission-id}',
      [{ name: 'calendarPermission-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /me/calendar/calendarPermissions/{calendarPermission-id}']['response']
      );
  }

  /**
   * `POST /me/calendar/calendarPermissions`
   *
   * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
   */
  async create(
    body: Endpoints['POST /me/calendar/calendarPermissions']['body'],
    params?: Endpoints['POST /me/calendar/calendarPermissions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/calendar/calendarPermissions', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/calendar/calendarPermissions']['response']);
  }
}
