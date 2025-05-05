import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ChatClient } from './chat';
import { TeamsAppClient } from './teamsApp';
import { TeamsAppDefinitionClient } from './teamsAppDefinition';

/**
 * /users/{user-id}/teamwork/installedApps
 * Provides operations to manage the installedApps property of the microsoft.graph.userTeamwork entity.
 */
export class InstalledAppsClient {
  protected baseUrl = '/users/{user-id}/teamwork/installedApps';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat`
   *
   * Provides operations to manage the chat property of the microsoft.graph.userScopeTeamsAppInstallation entity.
   */
  chat(userScopeTeamsAppInstallationId: string) {
    return new ChatClient(userScopeTeamsAppInstallationId, this.http);
  }

  /**
   * `/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp`
   *
   * Provides operations to manage the teamsApp property of the microsoft.graph.teamsAppInstallation entity.
   */
  teamsApp(userScopeTeamsAppInstallationId: string) {
    return new TeamsAppClient(userScopeTeamsAppInstallationId, this.http);
  }

  /**
   * `/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition`
   *
   * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
   */
  teamsAppDefinition(userScopeTeamsAppInstallationId: string) {
    return new TeamsAppDefinitionClient(userScopeTeamsAppInstallationId, this.http);
  }

  /**
   * `DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
   *
   * Uninstall an app from the personal scope of the specified user.
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
      );
  }

  /**
   * `GET /users/{user-id}/teamwork/installedApps`
   *
   * Retrieve the list of apps installed in the personal scope of the specified user.
   */
  async list(
    params?: Endpoints['GET /users/{user-id}/teamwork/installedApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/installedApps',
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
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /users/{user-id}/teamwork/installedApps']['response']
      );
  }

  /**
   * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
   *
   * Retrieve the app installed in the personal scope of the specified user.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
      [
        { name: 'user-id', in: 'path' },
        { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
      );
  }

  /**
   * `POST /users/{user-id}/teamwork/installedApps`
   *
   * Install an app in the personal scope of the specified user.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/teamwork/installedApps']['body'],
    params?: Endpoints['POST /users/{user-id}/teamwork/installedApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/installedApps',
      [{ name: 'user-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /users/{user-id}/teamwork/installedApps']['response']
      );
  }
}
