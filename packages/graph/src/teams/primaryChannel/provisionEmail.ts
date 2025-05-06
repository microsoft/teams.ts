import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './provisionEmail-types.ts';

/**
 * /teams/{team-id}/primaryChannel/provisionEmail
 * Provides operations to call the provisionEmail method.
 */
export class ProvisionEmailClient {
  protected baseUrl = '/teams/{team-id}/primaryChannel/provisionEmail';
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
   * `POST /teams/{team-id}/primaryChannel/provisionEmail`
   *
   * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a channel, use the removeEmail method.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/primaryChannel/provisionEmail']['body'],
    params?: Endpoints['POST /teams/{team-id}/primaryChannel/provisionEmail']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/provisionEmail',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/primaryChannel/provisionEmail']['response']
      );
  }
}
