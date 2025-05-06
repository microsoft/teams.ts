import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './markChatReadForUser-types.ts';

/**
 * /users/{user-id}/chats/{chat-id}/markChatReadForUser
 * Provides operations to call the markChatReadForUser method.
 */
export class MarkChatReadForUserClient {
  protected baseUrl = '/users/{user-id}/chats/{chat-id}/markChatReadForUser';
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
   * `POST /users/{user-id}/chats/{chat-id}/markChatReadForUser`
   *
   * Mark a chat as read for a user.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['body'],
    params?: Endpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/markChatReadForUser',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['response']
      );
  }
}
