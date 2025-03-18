import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddClient } from './add';
import { RemoveClient } from './remove';

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
 * /chats/{chat-id}/members
 * Provides operations to manage the members property of the microsoft.graph.chat entity.
 */
export class MembersClient {
  protected baseUrl = '/chats/{chat-id}/members';
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
   * `/chats/{chat-id}/members/add`
   *
   * Provides operations to call the add method.
   */
  get add() {
    return new AddClient(this.http);
  }

  /**
   * `/chats/{chat-id}/members/remove`
   *
   * Provides operations to call the remove method.
   */
  get remove() {
    return new RemoveClient(this.http);
  }

  /**
   * `DELETE /chats/{chat-id}/members/{conversationMember-id}`
   *
   * Remove a conversationMember from a chat.
   */
  async delete(
    params?: Endpoints['DELETE /chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/members/{conversationMember-id}',
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
          res.data as Endpoints['DELETE /chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `GET /chats/{chat-id}/members`
   *
   * List all conversation members in a chat or channel.
   */
  async list(
    params?: Endpoints['GET /chats/{chat-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/members',
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
      .then((res) => res.data as Endpoints['GET /chats/{chat-id}/members']['response']);
  }

  /**
   * `GET /chats/{chat-id}/members/{conversationMember-id}`
   *
   * Retrieve a conversationMember from a chat or channel.
   */
  async get(
    params?: Endpoints['GET /chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/members/{conversationMember-id}',
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
          res.data as Endpoints['GET /chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `PATCH /chats/{chat-id}/members/{conversationMember-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['body'],
    params?: Endpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/members/{conversationMember-id}',
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
          res.data as Endpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `POST /chats/{chat-id}/members`
   *
   * Add a conversationMember to a chat.
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/members']['body'],
    params?: Endpoints['POST /chats/{chat-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/chats/{chat-id}/members', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
      'chat-id': this.chatId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /chats/{chat-id}/members']['response']);
  }
}
