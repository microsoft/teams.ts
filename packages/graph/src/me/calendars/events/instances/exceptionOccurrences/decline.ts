import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './decline-types.ts';

/**
 * /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline
 * Provides operations to call the decline method.
 */
export class DeclineClient {
  protected baseUrl =
    '/me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline';
  protected http: http.Client;

  constructor(
    protected readonly eventId2: string,
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
   * `POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline`
   *
   * Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  async create(
    body: Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline']['body'],
    params?: Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline',
      [
        { name: 'calendar-id', in: 'path' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
        { name: 'event-id2', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id2': this.eventId2,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/decline']['response']
      );
  }
}
