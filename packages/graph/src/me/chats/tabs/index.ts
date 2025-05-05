import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamsAppClient } from './teamsApp';

/**
 * /me/chats/{chat-id}/tabs
 * Provides operations to manage the tabs property of the microsoft.graph.chat entity.
 */
export class TabsClient {
  protected baseUrl = '/me/chats/{chat-id}/tabs';
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
   * `/me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * Provides operations to manage the teamsApp property of the microsoft.graph.teamsTab entity.
   */
  teamsApp(teamsTabId: string) {
    return new TeamsAppClient(teamsTabId, this.http);
  }

  /**
   * `DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/tabs/{teamsTab-id}',
      [
        { name: 'If-Match', in: 'header' },
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
        (res) => res.data as Endpoints['DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/tabs`
   *
   * A collection of all the tabs in the chat. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/chats/{chat-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/tabs',
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
      .then((res) => res.data as Endpoints['GET /me/chats/{chat-id}/tabs']['response']);
  }

  /**
   * `GET /me/chats/{chat-id}/tabs/{teamsTab-id}`
   *
   * A collection of all the tabs in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/tabs/{teamsTab-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
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
        (res) => res.data as Endpoints['GET /me/chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/tabs/{teamsTab-id}',
      [
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
        (res) => res.data as Endpoints['PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `POST /me/chats/{chat-id}/tabs`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/tabs']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/chats/{chat-id}/tabs', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
      'chat-id': this.chatId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/chats/{chat-id}/tabs']['response']);
  }
}
