import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { MessageClient } from './message';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      const arrayFormat = param.explode == null || param.explode ? 'repeat' : 'comma'; // Assuming params are in form style
      query[param.name] = qs.stringify(data[param.name], { arrayFormat });
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /me/chats/{chat-id}/pinnedMessages
 * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
 */
export class PinnedMessagesClient {
  protected baseUrl = '/me/chats/{chat-id}/pinnedMessages';
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
   * `/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
   *
   * Provides operations to manage the message property of the microsoft.graph.pinnedChatMessageInfo entity.
   */
  message(pinnedChatMessageInfoId: string) {
    return new MessageClient(pinnedChatMessageInfoId, this.http);
  }

  /**
   * `DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
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
          res.data as Endpoints['DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/pinnedMessages`
   *
   * A collection of all the pinned messages in the chat. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/chats/{chat-id}/pinnedMessages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/pinnedMessages',
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
      .then((res) => res.data as Endpoints['GET /me/chats/{chat-id}/pinnedMessages']['response']);
  }

  /**
   * `GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
   *
   * A collection of all the pinned messages in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
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
          res.data as Endpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
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
          res.data as Endpoints['PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
      );
  }

  /**
   * `POST /me/chats/{chat-id}/pinnedMessages`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/pinnedMessages']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/pinnedMessages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/pinnedMessages',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/chats/{chat-id}/pinnedMessages']['response']);
  }
}
