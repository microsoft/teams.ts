import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { MessageClient } from './message';

/**
 * /chats/{chat-id}/pinnedMessages
 * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
 */
export class PinnedMessagesClient {
  protected baseUrl = '/chats/{chat-id}/pinnedMessages';
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
   * `/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
   *
   * Provides operations to manage the message property of the microsoft.graph.pinnedChatMessageInfo entity.
   */
  message(pinnedChatMessageInfoId: string) {
    return new MessageClient(pinnedChatMessageInfoId, this.http);
  }

  /**
   * `DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
   *
   * Unpin a message from a chat.
   */
  async delete(
    params?: Endpoints['DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'chat-id', in: 'path' },
        { name: 'pinnedChatMessageInfo-id', in: 'path' },
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
          res.data as Endpoints['DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
      );
  }

  /**
   * `GET /chats/{chat-id}/pinnedMessages`
   *
   * Get a list of pinnedChatMessages in a chat.
   */
  async list(
    params?: Endpoints['GET /chats/{chat-id}/pinnedMessages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/pinnedMessages',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /chats/{chat-id}/pinnedMessages']['response']);
  }

  /**
   * `GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
   *
   * A collection of all the pinned messages in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
        { name: 'pinnedChatMessageInfo-id', in: 'path' },
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
          res.data as Endpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
      );
  }

  /**
   * `PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['body'],
    params?: Endpoints['PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
      [
        { name: 'chat-id', in: 'path' },
        { name: 'pinnedChatMessageInfo-id', in: 'path' },
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
          res.data as Endpoints['PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
      );
  }

  /**
   * `POST /chats/{chat-id}/pinnedMessages`
   *
   * Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/pinnedMessages']['body'],
    params?: Endpoints['POST /chats/{chat-id}/pinnedMessages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/pinnedMessages',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /chats/{chat-id}/pinnedMessages']['response']);
  }
}
