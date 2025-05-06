import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamClient } from './team';

/**
 * /users/{user-id}/teamwork/associatedTeams
 * Provides operations to manage the associatedTeams property of the microsoft.graph.userTeamwork entity.
 */
export class AssociatedTeamsClient {
  protected baseUrl = '/users/{user-id}/teamwork/associatedTeams';
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
   * `/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team`
   *
   * Provides operations to manage the team property of the microsoft.graph.teamInfo entity.
   */
  team(associatedTeamInfoId: string) {
    return new TeamClient(associatedTeamInfoId, this.http);
  }

  /**
   * `DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'associatedTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
      );
  }

  /**
   * `GET /users/{user-id}/teamwork/associatedTeams`
   *
   * The list of associatedTeamInfo objects that a user is associated with.
   */
  async list(
    params?: Endpoints['GET /users/{user-id}/teamwork/associatedTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/associatedTeams',
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
        (res) => res.data as Endpoints['GET /users/{user-id}/teamwork/associatedTeams']['response']
      );
  }

  /**
   * `GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
   *
   * The list of associatedTeamInfo objects that a user is associated with.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'associatedTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}',
      [
        { name: 'user-id', in: 'path' },
        { name: 'associatedTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}']['response']
      );
  }

  /**
   * `POST /users/{user-id}/teamwork/associatedTeams`
   *
   */
  async create(
    body: Endpoints['POST /users/{user-id}/teamwork/associatedTeams']['body'],
    params?: Endpoints['POST /users/{user-id}/teamwork/associatedTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/associatedTeams',
      [{ name: 'user-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /users/{user-id}/teamwork/associatedTeams']['response']
      );
  }
}
