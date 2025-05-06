import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './clearUserPreferredPresence-types.ts';

/**
 * /communications/presences/{presence-id}/clearUserPreferredPresence
 * Provides operations to call the clearUserPreferredPresence method.
 */
export class ClearUserPreferredPresenceClient {
  protected baseUrl = '/communications/presences/{presence-id}/clearUserPreferredPresence';
  protected http: http.Client;

  constructor(
    protected readonly presenceId: string,
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
   * `POST /communications/presences/{presence-id}/clearUserPreferredPresence`
   *
   * Clear the preferred availability and activity status for a user.
   */
  async create(
    body: Endpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['body'],
    params?: Endpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences/{presence-id}/clearUserPreferredPresence',
      [{ name: 'presence-id', in: 'path' }],
      {
        ...(params || {}),
        'presence-id': this.presenceId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/presences/{presence-id}/clearUserPreferredPresence']['response']
      );
  }
}
