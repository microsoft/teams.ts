import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './cancel-types.ts';

/**
 * /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/cancel
 * Provides operations to call the cancel method.
 */
export class CancelClient {
  protected baseUrl = '/me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/cancel';
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
   * `POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/cancel`
   *
   * This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting 
by providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following
error message: &#x27;Your request can&#x27;t be completed. You need to be an organizer to cancel a meeting.&#x27; This action differs from Delete in that Cancel is available to only the organizer, and lets
the organizer send a custom message to the attendees about the cancellation.
   */
  async create(
    body: Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/cancel']['body'],
    params?: Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/cancel']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/cancel',
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
          res.data as Endpoints['POST /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/cancel']['response']
      );
  }
}
