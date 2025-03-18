import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './dismissReminder-types.ts';

/**
 * /me/calendarView/{event-id}/instances/{event-id1}/dismissReminder
 * Provides operations to call the dismissReminder method.
 */
export class DismissReminderClient {
  protected baseUrl = '/me/calendarView/{event-id}/instances/{event-id1}/dismissReminder';
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
   * `POST /me/calendarView/{event-id}/instances/{event-id1}/dismissReminder`
   *
   * Dismiss a reminder that has been triggered for an event in a user calendar.
   */
  async create(
    body: Endpoints['POST /me/calendarView/{event-id}/instances/{event-id1}/dismissReminder']['body'],
    params?: Endpoints['POST /me/calendarView/{event-id}/instances/{event-id1}/dismissReminder']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarView/{event-id}/instances/{event-id1}/dismissReminder',
      [
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
          res.data as Endpoints['POST /me/calendarView/{event-id}/instances/{event-id1}/dismissReminder']['response']
      );
  }
}
