import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './stopHoldMusic-types.ts';

/**
 * /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic
 * Provides operations to call the stopHoldMusic method.
 */
export class StopHoldMusicClient {
  protected baseUrl = '/communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic';
  protected http: http.Client;

  constructor(
    protected readonly participantId: string,
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
   * `POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic`
   *
   * Reincorporate a participant previously put on hold to the call.
   */
  async create(
    body: Endpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['body'],
    params?: Endpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic',
      [
        { name: 'call-id', in: 'path' },
        { name: 'participant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'participant-id': this.participantId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /communications/calls/{call-id}/participants/{participant-id}/stopHoldMusic']['response']
      );
  }
}
