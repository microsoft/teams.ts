import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './reject-types.ts';

/**
 * /communications/calls/{call-id}/reject
 * Provides operations to call the reject method.
 */
export class RejectClient {
  protected baseUrl = '/communications/calls/{call-id}/reject';
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
   * `POST /communications/calls/{call-id}/reject`
   *
   * Enable a bot to reject an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification will contain the chatInfo and meetingInfo parameters. The bot is expected to answer or reject the call before the call times out. The current timeout value is 15 seconds. This API does not end existing calls that have already been answered. Use delete call to end a call.
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/reject']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/reject']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/reject',
      [{ name: 'call-id', in: 'path' }],
      {
        ...(params || {}),
        'call-id': this.callId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /communications/calls/{call-id}/reject']['response']
      );
  }
}
