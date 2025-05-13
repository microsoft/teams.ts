import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './markChatReadForUser-types.ts';

/**
 * /chats/{chat-id}/markChatReadForUser
 * Provides operations to call the markChatReadForUser method.
 */
export class MarkChatReadForUserClient {
  protected baseUrl = '/chats/{chat-id}/markChatReadForUser';
  protected http: http.Client;

  constructor(
    protected readonly chatId: string,
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
   * `POST /chats/{chat-id}/markChatReadForUser`
   *
   * Mark a chat as read for a user.
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/markChatReadForUser']['body'],
    params?: Endpoints['POST /chats/{chat-id}/markChatReadForUser']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/markChatReadForUser',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /chats/{chat-id}/markChatReadForUser']['response']
      );
  }
}
