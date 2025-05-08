import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './permanentDelete-types.ts';

/**
 * /me/calendar/events/{event-id}/permanentDelete
 * Provides operations to call the permanentDelete method.
 */
export class PermanentDeleteClient {
  protected baseUrl = '/me/calendar/events/{event-id}/permanentDelete';
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
   * `POST /me/calendar/events/{event-id}/permanentDelete`
   *
   */
  async create(
    body: Endpoints['POST /me/calendar/events/{event-id}/permanentDelete']['body'],
    params?: Endpoints['POST /me/calendar/events/{event-id}/permanentDelete']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendar/events/{event-id}/permanentDelete',
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
          res.data as Endpoints['POST /me/calendar/events/{event-id}/permanentDelete']['response']
      );
  }
}
