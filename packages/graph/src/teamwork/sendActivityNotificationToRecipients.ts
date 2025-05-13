import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './sendActivityNotificationToRecipients-types.ts';

/**
 * /teamwork/sendActivityNotificationToRecipients
 * Provides operations to call the sendActivityNotificationToRecipients method.
 */
export class SendActivityNotificationToRecipientsClient {
  protected baseUrl = '/teamwork/sendActivityNotificationToRecipients';
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
   * `POST /teamwork/sendActivityNotificationToRecipients`
   *
   * Send activity feed notifications to multiple users, in bulk.  For more information, see sending Teams activity notifications.
   */
  async create(
    body: Endpoints['POST /teamwork/sendActivityNotificationToRecipients']['body'],
    params?: Endpoints['POST /teamwork/sendActivityNotificationToRecipients']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamwork/sendActivityNotificationToRecipients', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teamwork/sendActivityNotificationToRecipients']['response']
      );
  }
}
