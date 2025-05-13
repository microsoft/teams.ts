import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { MembersClient } from './members';

/**
 * /teams/{team-id}/tags
 * Provides operations to manage the tags property of the microsoft.graph.team entity.
 */
export class TagsClient {
  protected baseUrl = '/teams/{team-id}/tags';
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
   * `/teams/{team-id}/tags/{teamworkTag-id}/members`
   *
   * Provides operations to manage the members property of the microsoft.graph.teamworkTag entity.
   */
  members(teamworkTagId: string) {
    return new MembersClient(teamworkTagId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/tags/{teamworkTag-id}`
   *
   * Delete a tag object permanently.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'teamworkTag-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/tags`
   *
   * Get a list of the tag objects and their properties.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/tags']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags',
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/tags']['response']);
  }

  /**
   * `GET /teams/{team-id}/tags/{teamworkTag-id}`
   *
   * Read the properties and relationships of a tag object.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/tags/{teamworkTag-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'teamworkTag-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /teams/{team-id}/tags/{teamworkTag-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/tags/{teamworkTag-id}`
   *
   * Update the properties of a tag object.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/tags/{teamworkTag-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'teamworkTag-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/tags`
   *
   * Create a standard tag for members in a team.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/tags']['body'],
    params?: Endpoints['POST /teams/{team-id}/tags']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}/tags', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
      'team-id': this.teamId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/tags']['response']);
  }
}
