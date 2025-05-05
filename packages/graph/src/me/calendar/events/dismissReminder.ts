import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './dismissReminder-types.ts';

/**
 * /me/calendar/events/{event-id}/dismissReminder
 * Provides operations to call the dismissReminder method.
 */
export class DismissReminderClient {
  protected baseUrl = '/me/calendar/events/{event-id}/dismissReminder';
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
   * `POST /me/calendar/events/{event-id}/dismissReminder`
   *
   * Dismiss a reminder that has been triggered for an event in a user calendar.
   */
  async create(
    body: Endpoints['POST /me/calendar/events/{event-id}/dismissReminder']['body'],
    params?: Endpoints['POST /me/calendar/events/{event-id}/dismissReminder']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/events/{event-id}/dismissReminder',
      [{ name: 'event-id', in: 'path' }],
      {
        ...(params || {}),
        'event-id': this.eventId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendar/events/{event-id}/dismissReminder']['response']
      );
  }
}
