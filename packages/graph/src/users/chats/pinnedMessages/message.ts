import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './message-types.ts';

/**
 * /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message
 * Provides operations to manage the message property of the microsoft.graph.pinnedChatMessageInfo entity.
 */
export class MessageClient {
  protected baseUrl =
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message';
  protected http: http.Client;

  constructor(
    protected readonly pinnedChatMessageInfoId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
   *
   * Represents details about the chat message that is pinned.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'pinnedChatMessageInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'pinnedChatMessageInfo-id': this.pinnedChatMessageInfoId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['response']
      );
  }
}
