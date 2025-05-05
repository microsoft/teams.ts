import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './getSchedule-types.ts';

/**
 * /me/calendars/{calendar-id}/getSchedule
 * Provides operations to call the getSchedule method.
 */
export class GetScheduleClient {
  protected baseUrl = '/me/calendars/{calendar-id}/getSchedule';
  protected http: http.Client;

  constructor(
    protected readonly calendarId: string,
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
   * `POST /me/calendars/{calendar-id}/getSchedule`
   *
   * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
   */
  async create(
    body: Endpoints['POST /me/calendars/{calendar-id}/getSchedule']['body'],
    params?: Endpoints['POST /me/calendars/{calendar-id}/getSchedule']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendars/{calendar-id}/getSchedule',
      [{ name: 'calendar-id', in: 'path' }],
      {
        ...(params || {}),
        'calendar-id': this.calendarId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /me/calendars/{calendar-id}/getSchedule']['response']
      );
  }
}
