import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamsAppClient } from './teamsApp';
import { TeamsAppDefinitionClient } from './teamsAppDefinition';
import { UpgradeClient } from './upgrade';

/**
 * /teams/{team-id}/installedApps
 * Provides operations to manage the installedApps property of the microsoft.graph.team entity.
 */
export class InstalledAppsClient {
  protected baseUrl = '/teams/{team-id}/installedApps';
  protected http: http.Client;

  constructor(
    protected readonly teamId: string,
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
   * `/teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * Provides operations to manage the teamsApp property of the microsoft.graph.teamsAppInstallation entity.
   */
  teamsApp(teamsAppInstallationId: string) {
    return new TeamsAppClient(teamsAppInstallationId, this.http);
  }

  /**
   * `/teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * Provides operations to manage the teamsAppDefinition property of the microsoft.graph.teamsAppInstallation entity.
   */
  teamsAppDefinition(teamsAppInstallationId: string) {
    return new TeamsAppDefinitionClient(teamsAppInstallationId, this.http);
  }

  /**
   * `/teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Provides operations to call the upgrade method.
   */
  upgrade(teamsAppInstallationId: string) {
    return new UpgradeClient(teamsAppInstallationId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
   *
   * Uninstalls an app from the specified team.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/installedApps`
   *
   * Retrieve a list of apps installed in the specified team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/installedApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/installedApps',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/installedApps']['response']);
  }

  /**
   * `GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
   *
   * Retrieve the app installed in the specified team.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/installedApps`
   *
   * Install an app to the specified team.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/installedApps']['body'],
    params?: Endpoints['POST /teams/{team-id}/installedApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/installedApps',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/installedApps']['response']);
  }
}
