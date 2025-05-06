import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './getPresencesByUserId-types.ts';

/**
 * /communications/getPresencesByUserId
 * Provides operations to call the getPresencesByUserId method.
 */
export class GetPresencesByUserIdClient {
  protected baseUrl = '/communications/getPresencesByUserId';
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
   * `POST /communications/getPresencesByUserId`
   *
   * Get the presence information for multiple users.
   */
  async create(
    body: Endpoints['POST /communications/getPresencesByUserId']['body'],
    params?: Endpoints['POST /communications/getPresencesByUserId']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/communications/getPresencesByUserId', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /communications/getPresencesByUserId']['response']
      );
  }
}
