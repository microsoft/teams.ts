import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamsAppClient } from './teamsApp';

/**
 * /chats/{chat-id}/tabs
 * Provides operations to manage the tabs property of the microsoft.graph.chat entity.
 */
export class TabsClient {
  protected baseUrl = '/chats/{chat-id}/tabs';
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
   * `/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * Provides operations to manage the teamsApp property of the microsoft.graph.teamsTab entity.
   */
  teamsApp(teamsTabId: string) {
    return new TeamsAppClient(teamsTabId, this.http);
  }

  /**
   * `DELETE /chats/{chat-id}/tabs/{teamsTab-id}`
   *
   * Remove (unpin) a tab from the specified chat.
   */
  async delete(
    params?: Endpoints['DELETE /chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/tabs/{teamsTab-id}',
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
        (res) => res.data as Endpoints['DELETE /chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `GET /chats/{chat-id}/tabs`
   *
   * Retrieve the list of tabs in the specified chat.
   */
  async list(
    params?: Endpoints['GET /chats/{chat-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/tabs',
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
      .then((res) => res.data as Endpoints['GET /chats/{chat-id}/tabs']['response']);
  }

  /**
   * `GET /chats/{chat-id}/tabs/{teamsTab-id}`
   *
   * Retrieve the properties and relationships of the specified tab in a chat.
   */
  async get(
    params?: Endpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/tabs/{teamsTab-id}',
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
      .then((res) => res.data as Endpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}']['response']);
  }

  /**
   * `PATCH /chats/{chat-id}/tabs/{teamsTab-id}`
   *
   * Update the properties of the specified tab in a chat.
This can be used to configure the content of the tab.
   */
  async update(
    body: Endpoints['PATCH /chats/{chat-id}/tabs/{teamsTab-id}']['body'],
    params?: Endpoints['PATCH /chats/{chat-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/tabs/{teamsTab-id}',
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
        (res) => res.data as Endpoints['PATCH /chats/{chat-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `POST /chats/{chat-id}/tabs`
   *
   * Add (pin) a tab to the specified chat.
The corresponding app must already be installed in the chat.
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/tabs']['body'],
    params?: Endpoints['POST /chats/{chat-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/chats/{chat-id}/tabs', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
      'chat-id': this.chatId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /chats/{chat-id}/tabs']['response']);
  }
}
