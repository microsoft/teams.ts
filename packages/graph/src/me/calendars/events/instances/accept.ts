import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './accept-types.ts';

/**
 * /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/accept
 * Provides operations to call the accept method.
 */
export class AcceptClient {
  protected baseUrl = '/me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/accept';
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
   * `POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/accept`
   *
   * Accept the specified event in a user calendar.
   */
  async create(
    body: Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/accept']['body'],
    params?: Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/accept']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/accept',
      [
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
          res.data as Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/accept']['response']
      );
  }
}
