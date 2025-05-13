import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './teamsApp-types.ts';

/**
 * /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp
 * Provides operations to manage the teamsApp property of the microsoft.graph.teamsAppInstallation entity.
 */
export class TeamsAppClient {
  protected baseUrl =
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp';
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
   * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
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
          res.data as Endpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['response']
      );
  }
}
