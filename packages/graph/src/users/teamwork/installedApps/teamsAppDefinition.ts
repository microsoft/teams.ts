import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './teamsAppDefinition-types.ts';

/**
 * /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition
 * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
 */
export class TeamsAppDefinitionClient {
  protected baseUrl =
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition';
  protected http: http.Client;

  constructor(
    protected readonly userScopeTeamsAppInstallationId: string,
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
   * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'userScopeTeamsAppInstallation-id': this.userScopeTeamsAppInstallationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['response']
      );
  }
}
