import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './updateRecordingStatus-types.ts';

/**
 * /communications/calls/{call-id}/updateRecordingStatus
 * Provides operations to call the updateRecordingStatus method.
 */
export class UpdateRecordingStatusClient {
  protected baseUrl = '/communications/calls/{call-id}/updateRecordingStatus';
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
   * `POST /communications/calls/{call-id}/updateRecordingStatus`
   *
   * Update the application&#x27;s recording status associated with a call. This requires the use of the Teams policy-based recording solution.
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/updateRecordingStatus',
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
          res.data as Endpoints['POST /communications/calls/{call-id}/updateRecordingStatus']['response']
      );
  }
}
