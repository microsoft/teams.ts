import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './permissionGrants-types.ts';

/**
 * /teams/{team-id}/permissionGrants
 * Provides operations to manage the permissionGrants property of the microsoft.graph.team entity.
 */
export class PermissionGrantsClient {
  protected baseUrl = '/teams/{team-id}/permissionGrants';
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
   * `DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
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
          res.data as Endpoints['DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/permissionGrants`
   *
   * List all resource-specific permission grants on the team. This list specifies the Microsoft Entra apps that have access to the team, along with each app&#x27;s corresponding type of resource-specific access.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/permissionGrants',
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/permissionGrants']['response']);
  }

  /**
   * `GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps to access the team.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
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
          res.data as Endpoints['GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
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
          res.data as Endpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/permissionGrants`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/permissionGrants']['body'],
    params?: Endpoints['POST /teams/{team-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/permissionGrants',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/permissionGrants']['response']);
  }
}
