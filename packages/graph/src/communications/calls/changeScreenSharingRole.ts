import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './changeScreenSharingRole-types.ts';

/**
 * /communications/calls/{call-id}/changeScreenSharingRole
 * Provides operations to call the changeScreenSharingRole method.
 */
export class ChangeScreenSharingRoleClient {
  protected baseUrl = '/communications/calls/{call-id}/changeScreenSharingRole';
  protected http: http.Client;

  constructor(
    protected readonly callId: string,
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
   * `POST /communications/calls/{call-id}/changeScreenSharingRole`
   *
   * Allow applications to share screen content with the participants of a group call.
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/changeScreenSharingRole',
      [{ name: 'call-id', in: 'path' }],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/calls/{call-id}/changeScreenSharingRole']['response']
      );
  }
}
