import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './team-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true, arrayFormat: 'comma' })}`;
}

/**
 * /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team
 * Provides operations to manage the team property of the microsoft.graph.teamInfo entity.
 */
export class TeamClient {
  protected baseUrl =
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team';
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
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team`
   *
   */
  async get(
    params?: Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
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
          res.data as Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/team']['response']
      );
  }
}
