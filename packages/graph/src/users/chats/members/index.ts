import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddClient } from './add';
import { RemoveClient } from './remove';

/**
 * /users/{user-id}/chats/{chat-id}/members
 * Provides operations to manage the members property of the microsoft.graph.chat entity.
 */
export class MembersClient {
  protected baseUrl = '/users/{user-id}/chats/{chat-id}/members';
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
   * `/users/{user-id}/chats/{chat-id}/members/add`
   *
   * Provides operations to call the add method.
   */
  get add() {
    return new AddClient(this.http);
  }

  /**
   * `/users/{user-id}/chats/{chat-id}/members/remove`
   *
   * Provides operations to call the remove method.
   */
  get remove() {
    return new RemoveClient(this.http);
  }

  /**
   * `DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/members`
   *
   * A collection of all the members in the chat. Nullable.
   */
  async list(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/members',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
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
        (res) => res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/members']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
   *
   * A collection of all the members in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `POST /users/{user-id}/chats/{chat-id}/members`
   *
   */
  async create(
    body: Endpoints['POST /users/{user-id}/chats/{chat-id}/members']['body'],
    params?: Endpoints['POST /users/{user-id}/chats/{chat-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/members',
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
        (res) => res.data as Endpoints['POST /users/{user-id}/chats/{chat-id}/members']['response']
      );
  }
}
