import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './playPrompt-types.ts';

/**
 * /communications/calls/{call-id}/playPrompt
 * Provides operations to call the playPrompt method.
 */
export class PlayPromptClient {
  protected baseUrl = '/communications/calls/{call-id}/playPrompt';
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
   * `POST /communications/calls/{call-id}/playPrompt`
   *
   * Play a prompt in the call. For more information about how to handle operations, see commsOperation
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/playPrompt']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/playPrompt']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/playPrompt',
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
          res.data as Endpoints['POST /communications/calls/{call-id}/playPrompt']['response']
      );
  }
}
