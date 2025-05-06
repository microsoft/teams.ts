import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './calendar-types.ts';

/**
 * /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar
 * Provides operations to manage the calendar property of the microsoft.graph.event entity.
 */
export class CalendarClient {
  protected baseUrl =
    '/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar';
  protected http: http.Client;

  constructor(
    protected readonly eventId1: string,
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
   * `GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar`
   *
   * The calendar that contains the event. Navigation property. Read-only.
   */
  async get(
    params?: Endpoints['GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/calendar']['response']
      );
  }
}
