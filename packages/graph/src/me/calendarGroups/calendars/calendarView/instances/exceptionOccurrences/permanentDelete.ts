import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './permanentDelete-types.ts';

/**
 * /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete
 * Provides operations to call the permanentDelete method.
 */
export class PermanentDeleteClient {
  protected baseUrl =
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete';
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
   * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete`
   *
   */
  async create(
    body: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete']['body'],
    params?: Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete',
      [
        { name: 'calendarGroup-id', in: 'path' },
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
          res.data as Endpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/permanentDelete']['response']
      );
  }
}
