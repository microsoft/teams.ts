import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './calendarPermissions-types.ts';

/**
 * /me/calendars/{calendar-id}/calendarPermissions
 * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
 */
export class CalendarPermissionsClient {
  protected baseUrl = '/me/calendars/{calendar-id}/calendarPermissions';
  protected http: http.Client;

  constructor(
    protected readonly calendarId: string,
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
   * `DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendar-id', in: 'path' },
        { name: 'calendarPermission-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
      );
  }

  /**
   * `GET /me/calendars/{calendar-id}/calendarPermissions`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  async list(
    params?: Endpoints['GET /me/calendars/{calendar-id}/calendarPermissions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarPermissions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendars/{calendar-id}/calendarPermissions']['response']
      );
  }

  /**
   * `GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   * The permissions of the users with whom the calendar is shared.
   */
  async get(
    params?: Endpoints['GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
        { name: 'calendarPermission-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
      );
  }

  /**
   * `PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['body'],
    params?: Endpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}',
      [
        { name: 'calendar-id', in: 'path' },
        { name: 'calendarPermission-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /me/calendars/{calendar-id}/calendarPermissions/{calendarPermission-id}']['response']
      );
  }

  /**
   * `POST /me/calendars/{calendar-id}/calendarPermissions`
   *
   */
  async create(
    body: Endpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['body'],
    params?: Endpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarPermissions',
      [{ name: 'calendar-id', in: 'path' }],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendars/{calendar-id}/calendarPermissions']['response']
      );
  }
}
