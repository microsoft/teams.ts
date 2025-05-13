import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './activate-types.ts';

/**
 * /solutions/backupRestore/serviceApps/{serviceApp-id}/activate
 * Provides operations to call the activate method.
 */
export class ActivateClient {
  protected baseUrl = '/solutions/backupRestore/serviceApps/{serviceApp-id}/activate';
  protected http: http.Client;

  constructor(
    protected readonly serviceAppId: string,
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
   * `POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate`
   *
   * Activate a serviceApp.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['body'],
    params?: Endpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/serviceApps/{serviceApp-id}/activate',
      [{ name: 'serviceApp-id', in: 'path' }],
      {
        ...(params || {}),
        'serviceApp-id': this.serviceAppId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['response']
      );
  }
}
