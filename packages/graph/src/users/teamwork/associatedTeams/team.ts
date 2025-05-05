import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './team-types.ts';

/**
 * /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team
 * Provides operations to manage the team property of the microsoft.graph.teamInfo entity.
 */
export class TeamClient {
  protected baseUrl = '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team';
  protected http: http.Client;

  constructor(
    protected readonly associatedTeamInfoId: string,
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
   * `GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team`
   *
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'associatedTeamInfo-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'associatedTeamInfo-id': this.associatedTeamInfoId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}/team']['response']
      );
  }
}
