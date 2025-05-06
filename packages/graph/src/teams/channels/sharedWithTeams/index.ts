import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AllowedMembersClient } from './allowedMembers';
import { TeamClient } from './team';

/**
 * /teams/{team-id}/channels/{channel-id}/sharedWithTeams
 * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
 */
export class SharedWithTeamsClient {
  protected baseUrl = '/teams/{team-id}/channels/{channel-id}/sharedWithTeams';
  protected http: http.Client;

  constructor(
    protected readonly channelId: string,
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
   * `/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers`
   *
   * Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity.
   */
  allowedMembers(sharedWithChannelTeamInfoId: string) {
    return new AllowedMembersClient(sharedWithChannelTeamInfoId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
   *
   * Provides operations to manage the team property of the microsoft.graph.teamInfo entity.
   */
  team(sharedWithChannelTeamInfoId: string) {
    return new TeamClient(sharedWithChannelTeamInfoId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
   *
   * Unshare a channel with a team by deleting the corresponding sharedWithChannelTeamInfo resource. This operation is allowed only for channels with a membershipType value of shared.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams`
   *
   * Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a membershipType value of shared.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/sharedWithTeams',
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
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
   *
   * Get a team that has been shared with a specified channel. This operation is allowed only for channels with a membershipType value of shared.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['body'],
    params?: Endpoints['POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/sharedWithTeams',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/channels/{channel-id}/sharedWithTeams']['response']
      );
  }
}
