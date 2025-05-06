import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './activate-types.ts';

/**
 * /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate
 * Provides operations to call the activate method.
 */
export class ActivateClient {
  protected baseUrl = '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate';
  protected http: http.Client;

  constructor(
    protected readonly restoreSessionBaseId: string,
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
   * `POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate`
   *
   * Activate a draft restoreSessionBase object. The following points apply to restoring a protection unit:
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['body'],
    params?: Endpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate',
      [{ name: 'restoreSessionBase-id', in: 'path' }],
      {
        ...(params || {}),
        'restoreSessionBase-id': this.restoreSessionBaseId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['response']
      );
  }
}
