import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './clearUserPreferredPresence-types.ts';

/**
 * /users/{user-id}/presence/clearUserPreferredPresence
 * Provides operations to call the clearUserPreferredPresence method.
 */
export class ClearUserPreferredPresenceClient {
  protected baseUrl = '/users/{user-id}/presence/clearUserPreferredPresence';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `POST /users/{user-id}/presence/clearUserPreferredPresence`
   *
   * Clear the preferred availability and activity status for a user.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['body'],
    params?: Endpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/presence/clearUserPreferredPresence',
      [{ name: 'user-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/presence/clearUserPreferredPresence']['response']
      );
  }
}
