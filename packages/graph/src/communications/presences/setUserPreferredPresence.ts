import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './setUserPreferredPresence-types.ts';

/**
 * /communications/presences/{presence-id}/setUserPreferredPresence
 * Provides operations to call the setUserPreferredPresence method.
 */
export class SetUserPreferredPresenceClient {
  protected baseUrl = '/communications/presences/{presence-id}/setUserPreferredPresence';
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
   * `POST /communications/presences/{presence-id}/setUserPreferredPresence`
   *
   * Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user&#x27;s presence shows as the preferred status. Preferred presence takes effect only when at least one presence session exists for the user. Otherwise, the user&#x27;s presence shows as Offline. A presence session is created as a result of a successful setPresence operation, or if the user is signed in on a Microsoft Teams client. For more details, see presence sessions and time-out and expiration.
   */
  async create(
    body: Endpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['body'],
    params?: Endpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences/{presence-id}/setUserPreferredPresence',
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
          res.data as Endpoints['POST /communications/presences/{presence-id}/setUserPreferredPresence']['response']
      );
  }
}
