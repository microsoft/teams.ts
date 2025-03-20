import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './accept-types.ts';

/**
 * /me/calendar/calendarView/{event-id}/accept
 * Provides operations to call the accept method.
 */
export class AcceptClient {
  protected baseUrl = '/me/calendar/calendarView/{event-id}/accept';
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
   * `POST /me/calendar/calendarView/{event-id}/accept`
   *
   * Accept the specified event in a user calendar.
   */
  async create(
    body: Endpoints['POST /me/calendar/calendarView/{event-id}/accept']['body'],
    params?: Endpoints['POST /me/calendar/calendarView/{event-id}/accept']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/calendarView/{event-id}/accept',
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
          res.data as Endpoints['POST /me/calendar/calendarView/{event-id}/accept']['response']
      );
  }
}
