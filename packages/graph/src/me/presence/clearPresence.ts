import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './clearPresence-types.ts';

/**
 * /me/presence/clearPresence
 * Provides operations to call the clearPresence method.
 */
export class ClearPresenceClient {
  protected baseUrl = '/me/presence/clearPresence';
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
   * `POST /me/presence/clearPresence`
   *
   * Clear the application&#x27;s presence session for a user. If it is the user&#x27;s only presence session, the user&#x27;s presence will change to Offline/Offline. For details about presences sessions, see presence: setPresence.
   */
  async create(
    body: Endpoints['POST /me/presence/clearPresence']['body'],
    params?: Endpoints['POST /me/presence/clearPresence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/presence/clearPresence', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/presence/clearPresence']['response']);
  }
}
