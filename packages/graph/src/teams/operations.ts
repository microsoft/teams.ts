import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './operations-types.ts';

/**
 * /teams/{team-id}/operations
 * Provides operations to manage the operations property of the microsoft.graph.team entity.
 */
export class OperationsClient {
  protected baseUrl = '/teams/{team-id}/operations';
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
   * `DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'teamsAsyncOperation-id', in: 'path' },
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
          res.data as Endpoints['DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/operations`
   *
   * The async operations that ran or are running on this team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/operations',
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/operations']['response']);
  }

  /**
   * `GET /teams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   * The async operations that ran or are running on this team.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'teamsAsyncOperation-id', in: 'path' },
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
          res.data as Endpoints['GET /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/operations/{teamsAsyncOperation-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'teamsAsyncOperation-id', in: 'path' },
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
          res.data as Endpoints['PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/operations`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/operations']['body'],
    params?: Endpoints['POST /teams/{team-id}/operations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}/operations', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
      'team-id': this.teamId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/operations']['response']);
  }
}
