import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamsAppClient } from './teamsApp';

/**
 * /users/{user-id}/chats/{chat-id}/tabs
 * Provides operations to manage the tabs property of the microsoft.graph.chat entity.
 */
export class TabsClient {
  protected baseUrl = '/users/{user-id}/chats/{chat-id}/tabs';
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
   * `/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * Provides operations to manage the teamsApp property of the microsoft.graph.teamsTab entity.
   */
  teamsApp(teamsTabId: string) {
    return new TeamsAppClient(teamsTabId, this.http);
  }

  /**
   * `DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsTab-id', in: 'path' },
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
          res.data as Endpoints['DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/tabs`
   *
   * A collection of all the tabs in the chat. Nullable.
   */
  async list(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/tabs',
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
        (res) => res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/tabs']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
   *
   * A collection of all the tabs in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsTab-id', in: 'path' },
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
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsTab-id', in: 'path' },
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
          res.data as Endpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `POST /users/{user-id}/chats/{chat-id}/tabs`
   *
   */
  async create(
    body: Endpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['body'],
    params?: Endpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/tabs',
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
        (res) => res.data as Endpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['response']
      );
  }
}
