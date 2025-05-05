import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CalendarPermissionsClient } from './calendarPermissions';
import { CalendarViewClient } from './calendarView';
import { EventsClient } from './events';
import { GetScheduleClient } from './getSchedule';

/**
 * /me/calendars
 * Provides operations to manage the calendars property of the microsoft.graph.user entity.
 */
export class CalendarsClient {
  protected baseUrl = '/me/calendars';
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
   * `/me/calendars/{calendar-id}/calendarPermissions`
   *
   * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
   */
  calendarPermissions(calendarId: string) {
    return new CalendarPermissionsClient(calendarId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/calendarView`
   *
   * Provides operations to manage the calendarView property of the microsoft.graph.calendar entity.
   */
  calendarView(calendarId: string) {
    return new CalendarViewClient(calendarId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/events`
   *
   * Provides operations to manage the events property of the microsoft.graph.calendar entity.
   */
  events(calendarId: string) {
    return new EventsClient(calendarId, this.http);
  }

  /**
   * `/me/calendars/{calendar-id}/getSchedule`
   *
   * Provides operations to call the getSchedule method.
   */
  getSchedule(calendarId: string) {
    return new GetScheduleClient(calendarId, this.http);
  }

  /**
   * `DELETE /me/calendars/{calendar-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendars/{calendar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendar-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /me/calendars/{calendar-id}']['response']);
  }

  /**
   * `GET /me/calendars`
   *
   * Get all the user&#x27;s calendars (/calendars navigation property), get the calendars from the default calendar group or from a specific calendar group.
   */
  async list(params?: Endpoints['GET /me/calendars']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/me/calendars',
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
      .then((res) => res.data as Endpoints['GET /me/calendars']['response']);
  }

  /**
   * `GET /me/calendars/{calendar-id}`
   *
   * The user&#x27;s calendars. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/calendars/{calendar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/calendars/{calendar-id}']['response']);
  }

  /**
   * `PATCH /me/calendars/{calendar-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/calendars/{calendar-id}']['body'],
    params?: Endpoints['PATCH /me/calendars/{calendar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}',
      [{ name: 'calendar-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /me/calendars/{calendar-id}']['response']);
  }

  /**
   * `POST /me/calendars`
   *
   * Create a new calendar for a user.
   */
  async create(
    body: Endpoints['POST /me/calendars']['body'],
    params?: Endpoints['POST /me/calendars']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/calendars', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/calendars']['response']);
  }
}
