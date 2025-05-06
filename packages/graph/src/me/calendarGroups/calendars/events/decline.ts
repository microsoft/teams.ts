import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './decline-types.ts';

/**
 * /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/decline
 * Provides operations to call the decline method.
 */
export class DeclineClient {
  protected baseUrl =
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/decline';
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
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/decline`
   *
   * Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the proposedNewTime parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.
   */
  async create(
    body: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/decline']['body'],
    params?: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/decline']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/decline',
      [
        { name: 'calendarGroup-id', in: 'path' },
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
          res.data as Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/decline']['response']
      );
  }
}
