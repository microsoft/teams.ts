import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ChannelsClient } from './channels';

/**
 * /teamwork/deletedTeams
 * Provides operations to manage the deletedTeams property of the microsoft.graph.teamwork entity.
 */
export class DeletedTeamsClient {
  protected baseUrl = '/teamwork/deletedTeams';
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
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels`
   *
   * Provides operations to manage the channels property of the microsoft.graph.deletedTeam entity.
   */
  channels(deletedTeamId: string) {
    return new ChannelsClient(deletedTeamId, this.http);
  }

  /**
   * `DELETE /teamwork/deletedTeams/{deletedTeam-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'deletedTeam-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}']['response']
      );
  }

  /**
   * `GET /teamwork/deletedTeams`
   *
   * Get a list of the deletedTeam objects and their properties.
   */
  async list(
    params?: Endpoints['GET /teamwork/deletedTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teamwork/deletedTeams']['response']);
  }

  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}`
   *
   * The deleted team.
   */
  async get(
    params?: Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'deletedTeam-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}']['response']
      );
  }

  /**
   * `PATCH /teamwork/deletedTeams/{deletedTeam-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}']['body'],
    params?: Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}',
      [{ name: 'deletedTeam-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}']['response']
      );
  }

  /**
   * `POST /teamwork/deletedTeams`
   *
   */
  async create(
    body: Endpoints['POST /teamwork/deletedTeams']['body'],
    params?: Endpoints['POST /teamwork/deletedTeams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamwork/deletedTeams', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teamwork/deletedTeams']['response']);
  }
}
