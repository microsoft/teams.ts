import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './acquireAccessToken-types.ts';

/**
 * /applications/{application-id}/synchronization/acquireAccessToken
 * Provides operations to call the acquireAccessToken method.
 */
export class AcquireAccessTokenClient {
  protected baseUrl = '/applications/{application-id}/synchronization/acquireAccessToken';
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
   * `POST /applications/{application-id}/synchronization/acquireAccessToken`
   *
   * Acquire an OAuth access token to authorize the Microsoft Entra provisioning service to provision users into an application.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/acquireAccessToken',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/acquireAccessToken']['response']
      );
  }
}
