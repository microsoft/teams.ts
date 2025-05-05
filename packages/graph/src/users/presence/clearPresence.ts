import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './clearPresence-types.ts';

/**
 * /users/{user-id}/presence/clearPresence
 * Provides operations to call the clearPresence method.
 */
export class ClearPresenceClient {
  protected baseUrl = '/users/{user-id}/presence/clearPresence';
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
   * `POST /users/{user-id}/presence/clearPresence`
   *
   * Clear the application&#x27;s presence session for a user. If it is the user&#x27;s only presence session, the user&#x27;s presence will change to Offline/Offline. For details about presences sessions, see presence: setPresence.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/presence/clearPresence']['body'],
    params?: Endpoints['POST /users/{user-id}/presence/clearPresence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/presence/clearPresence',
      [{ name: 'user-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /users/{user-id}/presence/clearPresence']['response']
      );
  }
}
