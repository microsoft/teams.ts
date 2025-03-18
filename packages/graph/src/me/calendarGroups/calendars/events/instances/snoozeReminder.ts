import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './snoozeReminder-types.ts';

/**
 * /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/snoozeReminder
 * Provides operations to call the snoozeReminder method.
 */
export class SnoozeReminderClient {
  protected baseUrl =
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/snoozeReminder';
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
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/snoozeReminder`
   *
   * Postpone a reminder for an event in a user calendar until a new time.
   */
  async create(
    body: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/snoozeReminder']['body'],
    params?: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/snoozeReminder']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/snoozeReminder',
      [
        { name: 'calendarGroup-id', in: 'path' },
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
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/snoozeReminder']['response']
      );
  }
}
