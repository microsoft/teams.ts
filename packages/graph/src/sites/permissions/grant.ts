import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './grant-types.ts';

/**
 * /sites/{site-id}/permissions/{permission-id}/grant
 * Provides operations to call the grant method.
 */
export class GrantClient {
  protected baseUrl = '/sites/{site-id}/permissions/{permission-id}/grant';
  protected http: http.Client;

  constructor(
    protected readonly permissionId: string,
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
   * `POST /sites/{site-id}/permissions/{permission-id}/grant`
   *
   * Grant users access to a link represented by a permission.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/permissions/{permission-id}/grant']['body'],
    params?: Endpoints['POST /sites/{site-id}/permissions/{permission-id}/grant']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/permissions/{permission-id}/grant',
      [
        { name: 'site-id', in: 'path' },
        { name: 'permission-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'permission-id': this.permissionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/permissions/{permission-id}/grant']['response']
      );
  }
}
