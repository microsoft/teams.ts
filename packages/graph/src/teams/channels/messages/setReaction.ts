import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './setReaction-types.ts';

/**
 * /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction
 * Provides operations to call the setReaction method.
 */
export class SetReactionClient {
  protected baseUrl =
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction';
  protected http: http.Client;

  constructor(
    protected readonly chatMessageId: string,
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
   * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['body'],
    params?: Endpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id': this.chatMessageId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['response']
      );
  }
}
