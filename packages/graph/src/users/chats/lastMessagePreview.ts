import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './lastMessagePreview-types.ts';

/**
 * /users/{user-id}/chats/{chat-id}/lastMessagePreview
 * Provides operations to manage the lastMessagePreview property of the microsoft.graph.chat entity.
 */
export class LastMessagePreviewClient {
  protected baseUrl = '/users/{user-id}/chats/{chat-id}/lastMessagePreview';
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
   * `DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/lastMessagePreview`
   *
   * Preview of the last message sent in the chat. Null if no messages were sent in the chat. Currently, only the list chats operation supports this property.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['body'],
    params?: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
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
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
      );
  }
}
