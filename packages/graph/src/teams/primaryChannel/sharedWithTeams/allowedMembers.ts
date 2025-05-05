import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './allowedMembers-types.ts';

/**
 * /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers
 * Provides operations to manage the allowedMembers property of the microsoft.graph.sharedWithChannelTeamInfo entity.
 */
export class AllowedMembersClient {
  protected baseUrl =
    '/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers';
  protected http: http.Client;

  constructor(
    protected readonly sharedWithChannelTeamInfoId: string,
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
   * `GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers`
   *
   * A collection of team members who have access to the shared channel.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers',
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
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharedWithChannelTeamInfo-id': this.sharedWithChannelTeamInfoId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}`
   *
   * A collection of team members who have access to the shared channel.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'sharedWithChannelTeamInfo-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharedWithChannelTeamInfo-id': this.sharedWithChannelTeamInfoId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}']['response']
      );
  }
}
