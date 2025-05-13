import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './reauthorize-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize
 * Provides operations to call the reauthorize method.
 */
export class ReauthorizeClient {
  protected baseUrl =
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize';
  protected http: http.Client;

  constructor(
    protected readonly subscriptionId: string,
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
   * `POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize`
   *
   * Reauthorize a subscription when you receive a reauthorizationRequired challenge.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'subscription-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'subscription-id': this.subscriptionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/reauthorize']['response']
      );
  }
}
