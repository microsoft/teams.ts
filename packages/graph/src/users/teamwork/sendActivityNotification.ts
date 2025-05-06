import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './sendActivityNotification-types.ts';

/**
 * /users/{user-id}/teamwork/sendActivityNotification
 * Provides operations to call the sendActivityNotification method.
 */
export class SendActivityNotificationClient {
  protected baseUrl = '/users/{user-id}/teamwork/sendActivityNotification';
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
   * `POST /users/{user-id}/teamwork/sendActivityNotification`
   *
   * Send an activity feed notification to a user. For more information, see sending Teams activity notifications.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['body'],
    params?: Endpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/sendActivityNotification',
      [{ name: 'user-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['response']
      );
  }
}
