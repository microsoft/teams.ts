import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './snoozeReminder-types.ts';

/**
 * /me/calendars/{calendar-id}/calendarView/{event-id}/snoozeReminder
 * Provides operations to call the snoozeReminder method.
 */
export class SnoozeReminderClient {
  protected baseUrl = '/me/calendars/{calendar-id}/calendarView/{event-id}/snoozeReminder';
  protected http: http.Client;

  constructor(
    protected readonly eventId: string,
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
   * `POST /me/calendars/{calendar-id}/calendarView/{event-id}/snoozeReminder`
   *
   * Postpone a reminder for an event in a user calendar until a new time.
   */
  async create(
    body: Endpoints['POST /me/calendars/{calendar-id}/calendarView/{event-id}/snoozeReminder']['body'],
    params?: Endpoints['POST /me/calendars/{calendar-id}/calendarView/{event-id}/snoozeReminder']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/calendarView/{event-id}/snoozeReminder',
      [
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendars/{calendar-id}/calendarView/{event-id}/snoozeReminder']['response']
      );
  }
}
