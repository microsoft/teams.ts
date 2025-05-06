import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './sendDtmfTones-types.ts';

/**
 * /communications/calls/{call-id}/sendDtmfTones
 * Provides operations to call the sendDtmfTones method.
 */
export class SendDtmfTonesClient {
  protected baseUrl = '/communications/calls/{call-id}/sendDtmfTones';
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
   * `POST /communications/calls/{call-id}/sendDtmfTones`
   *
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/sendDtmfTones']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/sendDtmfTones']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/sendDtmfTones',
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
          res.data as Endpoints['POST /communications/calls/{call-id}/sendDtmfTones']['response']
      );
  }
}
