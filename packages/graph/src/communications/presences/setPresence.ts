import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './setPresence-types.ts';

/**
 * /communications/presences/{presence-id}/setPresence
 * Provides operations to call the setPresence method.
 */
export class SetPresenceClient {
  protected baseUrl = '/communications/presences/{presence-id}/setPresence';
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
   * `POST /communications/presences/{presence-id}/setPresence`
   *
   * Set the state of a user&#x27;s presence session as an application.
   */
  async create(
    body: Endpoints['POST /communications/presences/{presence-id}/setPresence']['body'],
    params?: Endpoints['POST /communications/presences/{presence-id}/setPresence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences/{presence-id}/setPresence',
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
          res.data as Endpoints['POST /communications/presences/{presence-id}/setPresence']['response']
      );
  }
}
