import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './members-types.ts';

/**
 * /teams/{team-id}/tags/{teamworkTag-id}/members
 * Provides operations to manage the members property of the microsoft.graph.teamworkTag entity.
 */
export class MembersClient {
  protected baseUrl = '/teams/{team-id}/tags/{teamworkTag-id}/members';
  protected http: http.Client;

  constructor(
    protected readonly teamworkTagId: string,
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
   * `DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Delete a member from a standard tag in a team.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'teamworkTag-id', in: 'path' },
        { name: 'teamworkTagMember-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamworkTag-id': this.teamworkTagId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/tags/{teamworkTag-id}/members`
   *
   * Get a list of the members of a standard tag in a team and their properties.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}/members',
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
        { name: 'teamworkTag-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamworkTag-id': this.teamworkTagId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Get the properties and relationships of a member of a standard tag in a team.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'teamworkTag-id', in: 'path' },
        { name: 'teamworkTagMember-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamworkTag-id': this.teamworkTagId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'teamworkTag-id', in: 'path' },
        { name: 'teamworkTagMember-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamworkTag-id': this.teamworkTagId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/tags/{teamworkTag-id}/members`
   *
   * Create a new teamworkTagMember object in a team.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['body'],
    params?: Endpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}/members',
      [
        { name: 'team-id', in: 'path' },
        { name: 'teamworkTag-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamworkTag-id': this.teamworkTagId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['response']
      );
  }
}
