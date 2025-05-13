import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddClient } from './add';
import { RemoveClient } from './remove';

/**
 * /me/chats/{chat-id}/members
 * Provides operations to manage the members property of the microsoft.graph.chat entity.
 */
export class MembersClient {
  protected baseUrl = '/me/chats/{chat-id}/members';
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
   * `/me/chats/{chat-id}/members/add`
   *
   * Provides operations to call the add method.
   */
  get add() {
    return new AddClient(this.http);
  }

  /**
   * `/me/chats/{chat-id}/members/remove`
   *
   * Provides operations to call the remove method.
   */
  get remove() {
    return new RemoveClient(this.http);
  }

  /**
   * `DELETE /me/chats/{chat-id}/members/{conversationMember-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/members/{conversationMember-id}',
      [
        { name: 'If-Match', in: 'header' },
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
          res.data as Endpoints['DELETE /me/chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/members`
   *
   * List all conversation members in a chat. This method supports federation. For one-on-one chats, at least one chat member must belong to the tenant the request initiates from. For group chats, the chat must be initiated by a user in the tenant the request initiates from.
   */
  async list(
    params?: Endpoints['GET /me/chats/{chat-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/members',
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
      .then((res) => res.data as Endpoints['GET /me/chats/{chat-id}/members']['response']);
  }

  /**
   * `GET /me/chats/{chat-id}/members/{conversationMember-id}`
   *
   * A collection of all the members in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/members/{conversationMember-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
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
          res.data as Endpoints['GET /me/chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/members/{conversationMember-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/members/{conversationMember-id}',
      [
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
          res.data as Endpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `POST /me/chats/{chat-id}/members`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/members']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/chats/{chat-id}/members', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
      'chat-id': this.chatId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/chats/{chat-id}/members']['response']);
  }
}
