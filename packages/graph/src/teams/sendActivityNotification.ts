import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './sendActivityNotification-types.ts';

/**
 * /teams/{team-id}/sendActivityNotification
 * Provides operations to call the sendActivityNotification method.
 */
export class SendActivityNotificationClient {
  protected baseUrl = '/teams/{team-id}/sendActivityNotification';
  protected http: http.Client;

  constructor(
    protected readonly teamId: string,
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
   * `POST /teams/{team-id}/sendActivityNotification`
   *
   * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/sendActivityNotification']['body'],
    params?: Endpoints['POST /teams/{team-id}/sendActivityNotification']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/sendActivityNotification',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /teams/{team-id}/sendActivityNotification']['response']
      );
  }
}
