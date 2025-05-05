import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AllowedMembersClient } from './allowedMembers';
import { TeamClient } from './team';

/**
 * /teams/{team-id}/primaryChannel/sharedWithTeams
 * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
 */
export class SharedWithTeamsClient {
  protected baseUrl = '/teams/{team-id}/primaryChannel/sharedWithTeams';
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
   * `/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers`
   *
   * Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity.
   */
  allowedMembers(sharedWithChannelTeamInfoId: string) {
    return new AllowedMembersClient(sharedWithChannelTeamInfoId, this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
   *
   * Provides operations to manage the team property of the microsoft.graph.teamInfo entity.
   */
  team(sharedWithChannelTeamInfoId: string) {
    return new TeamClient(sharedWithChannelTeamInfoId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/primaryChannel/sharedWithTeams`
   *
   * A collection of teams with which a channel is shared.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/sharedWithTeams',
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
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
   *
   * A collection of teams with which a channel is shared.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/primaryChannel/sharedWithTeams`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/primaryChannel/sharedWithTeams']['body'],
    params?: Endpoints['POST /teams/{team-id}/primaryChannel/sharedWithTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/sharedWithTeams',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/primaryChannel/sharedWithTeams']['response']
      );
  }
}
