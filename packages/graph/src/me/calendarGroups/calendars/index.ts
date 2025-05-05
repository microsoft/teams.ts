import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CalendarPermissionsClient } from './calendarPermissions';
import { CalendarViewClient } from './calendarView';
import { EventsClient } from './events';
import { GetScheduleClient } from './getSchedule';

/**
 * /me/calendarGroups/{calendarGroup-id}/calendars
 * Provides operations to manage the calendars property of the microsoft.graph.calendarGroup entity.
 */
export class CalendarsClient {
  protected baseUrl = '/me/calendarGroups/{calendarGroup-id}/calendars';
  protected http: http.Client;

  constructor(
    protected readonly calendarGroupId: string,
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
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarPermissions`
   *
   * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
   */
  calendarPermissions(calendarId: string) {
    return new CalendarPermissionsClient(calendarId, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView`
   *
   * Provides operations to manage the calendarView property of the microsoft.graph.calendar entity.
   */
  calendarView(calendarId: string) {
    return new CalendarViewClient(calendarId, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events`
   *
   * Provides operations to manage the events property of the microsoft.graph.calendar entity.
   */
  events(calendarId: string) {
    return new EventsClient(calendarId, this.http);
  }

  /**
   * `/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule`
   *
   * Provides operations to call the getSchedule method.
   */
  getSchedule(calendarId: string) {
    return new GetScheduleClient(calendarId, this.http);
  }

  /**
   * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendarGroup-id': this.calendarGroupId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
      );
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars`
   *
   * Retrieve a list of calendars belonging to a calendar group.
   */
  async list(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendarGroup-id': this.calendarGroupId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars']['response']
      );
  }

  /**
   * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
   *
   * The calendars in the calendar group. Navigation property. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendarGroup-id': this.calendarGroupId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
      );
  }

  /**
   * `PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['body'],
    params?: Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}',
      [
        { name: 'calendarGroup-id', in: 'path' },
        { name: 'calendar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'calendarGroup-id': this.calendarGroupId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}']['response']
      );
  }

  /**
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars`
   *
   * Use this API to create a new calendar in a calendar group for a user.
   */
  async create(
    body: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['body'],
    params?: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars',
      [{ name: 'calendarGroup-id', in: 'path' }],
      {
        ...(params || {}),
        'calendarGroup-id': this.calendarGroupId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars']['response']
      );
  }
}
