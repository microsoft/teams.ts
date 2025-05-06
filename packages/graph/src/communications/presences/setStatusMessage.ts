import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './setStatusMessage-types.ts';

/**
 * /communications/presences/{presence-id}/setStatusMessage
 * Provides operations to call the setStatusMessage method.
 */
export class SetStatusMessageClient {
  protected baseUrl = '/communications/presences/{presence-id}/setStatusMessage';
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
   * `POST /communications/presences/{presence-id}/setStatusMessage`
   *
   * Set a presence status message for a user. An optional expiration date and time can be supplied.
   */
  async create(
    body: Endpoints['POST /communications/presences/{presence-id}/setStatusMessage']['body'],
    params?: Endpoints['POST /communications/presences/{presence-id}/setStatusMessage']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences/{presence-id}/setStatusMessage',
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
          res.data as Endpoints['POST /communications/presences/{presence-id}/setStatusMessage']['response']
      );
  }
}
