import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './subscribeToTone-types.ts';

/**
 * /communications/calls/{call-id}/subscribeToTone
 * Provides operations to call the subscribeToTone method.
 */
export class SubscribeToToneClient {
  protected baseUrl = '/communications/calls/{call-id}/subscribeToTone';
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
   * `POST /communications/calls/{call-id}/subscribeToTone`
   *
   * Subscribe to DTMF (dual-tone multi-frequency signaling) which allows you to be notified when the user presses keys on a &#x27;dialpad&#x27;.
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/subscribeToTone']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/subscribeToTone']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/subscribeToTone',
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
          res.data as Endpoints['POST /communications/calls/{call-id}/subscribeToTone']['response']
      );
  }
}
