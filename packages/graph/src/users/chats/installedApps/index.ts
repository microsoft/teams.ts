import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamsAppClient } from './teamsApp';
import { TeamsAppDefinitionClient } from './teamsAppDefinition';
import { UpgradeClient } from './upgrade';

/**
 * /users/{user-id}/chats/{chat-id}/installedApps
 * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
 */
export class InstalledAppsClient {
  protected baseUrl = '/users/{user-id}/chats/{chat-id}/installedApps';
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
   * `/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * Provides operations to manage the teamsApp property of the microsoft.graph.teamsAppInstallation entity.
   */
  teamsApp(teamsAppInstallationId: string) {
    return new TeamsAppClient(teamsAppInstallationId, this.http);
  }

  /**
   * `/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
   */
  teamsAppDefinition(teamsAppInstallationId: string) {
    return new TeamsAppDefinitionClient(teamsAppInstallationId, this.http);
  }

  /**
   * `/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Provides operations to call the upgrade method.
   */
  upgrade(teamsAppInstallationId: string) {
    return new UpgradeClient(teamsAppInstallationId, this.http);
  }

  /**
   * `DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
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
          res.data as Endpoints['DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/installedApps`
   *
   * A collection of all the apps in the chat. Nullable.
   */
  async list(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/installedApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/installedApps',
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
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/installedApps']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
   *
   * A collection of all the apps in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
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
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
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
          res.data as Endpoints['PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
      );
  }

  /**
   * `POST /users/{user-id}/chats/{chat-id}/installedApps`
   *
   */
  async create(
    body: Endpoints['POST /users/{user-id}/chats/{chat-id}/installedApps']['body'],
    params?: Endpoints['POST /users/{user-id}/chats/{chat-id}/installedApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/installedApps',
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
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/chats/{chat-id}/installedApps']['response']
      );
  }
}
