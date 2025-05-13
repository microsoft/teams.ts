import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './setStatusMessage-types.ts';

/**
 * /me/presence/setStatusMessage
 * Provides operations to call the setStatusMessage method.
 */
export class SetStatusMessageClient {
  protected baseUrl = '/me/presence/setStatusMessage';
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
   * `POST /me/presence/setStatusMessage`
   *
   * Set a presence status message for a user. An optional expiration date and time can be supplied.
   */
  async create(
    body: Endpoints['POST /me/presence/setStatusMessage']['body'],
    params?: Endpoints['POST /me/presence/setStatusMessage']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/presence/setStatusMessage', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/presence/setStatusMessage']['response']);
  }
}
