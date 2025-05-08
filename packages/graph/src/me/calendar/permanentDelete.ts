import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './permanentDelete-types.ts';

/**
 * /me/calendar/permanentDelete
 * Provides operations to call the permanentDelete method.
 */
export class PermanentDeleteClient {
  protected baseUrl = '/me/calendar/permanentDelete';
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
   * `POST /me/calendar/permanentDelete`
   *
   * Permanently delete a calendar folder and the events that it contains and remove them from the mailbox. For more information about item retention, see Configure deleted item retention and recoverable items quotas.
   */
  async create(
    body: Endpoints['POST /me/calendar/permanentDelete']['body'],
    params?: Endpoints['POST /me/calendar/permanentDelete']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/calendar/permanentDelete', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/calendar/permanentDelete']['response']);
  }
}
