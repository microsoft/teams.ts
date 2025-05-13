import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './unsetReaction-types.ts';

/**
 * /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction
 * Provides operations to call the unsetReaction method.
 */
export class UnsetReactionClient {
  protected baseUrl = '/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction';
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
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction`
   *
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction',
      [
        { name: 'chat-id', in: 'path' },
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
          res.data as Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['response']
      );
  }
}
