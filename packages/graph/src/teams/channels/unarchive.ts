import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './unarchive-types.ts';

/**
 * /teams/{team-id}/channels/{channel-id}/unarchive
 * Provides operations to call the unarchive method.
 */
export class UnarchiveClient {
  protected baseUrl = '/teams/{team-id}/channels/{channel-id}/unarchive';
  protected http: http.Client;

  constructor(
    protected readonly channelId: string,
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
   * `POST /teams/{team-id}/channels/{channel-id}/unarchive`
   *
   * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['body'],
    params?: Endpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/unarchive',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['response']
      );
  }
}
