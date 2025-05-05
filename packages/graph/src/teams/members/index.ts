import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddClient } from './add';
import { RemoveClient } from './remove';

/**
 * /teams/{team-id}/members
 * Provides operations to manage the members property of the microsoft.graph.team entity.
 */
export class MembersClient {
  protected baseUrl = '/teams/{team-id}/members';
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
   * `/teams/{team-id}/members/add`
   *
   * Provides operations to call the add method.
   */
  get add() {
    return new AddClient(this.http);
  }

  /**
   * `/teams/{team-id}/members/remove`
   *
   * Provides operations to call the remove method.
   */
  get remove() {
    return new RemoveClient(this.http);
  }

  /**
   * `DELETE /teams/{team-id}/members/{conversationMember-id}`
   *
   * Remove a conversationMember from a team.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/members/{conversationMember-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['DELETE /teams/{team-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/members`
   *
   * Get the conversationMember collection of a team. The membership IDs returned by the server must be treated as opaque strings. The client shouldn&#x27;t try to parse or make assumptions about these resource IDs. In the future, membership results can include users from various tenants, as indicated in the response. Clients should avoid assuming that all members exclusively belong to the current tenant.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/members',
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/members']['response']);
  }

  /**
   * `GET /teams/{team-id}/members/{conversationMember-id}`
   *
   * Get a conversationMember from a team.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/members/{conversationMember-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['GET /teams/{team-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/members/{conversationMember-id}`
   *
   * Update the role of a conversationMember in a team.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/members/{conversationMember-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/members`
   *
   * Add a new conversationMember to a team.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/members']['body'],
    params?: Endpoints['POST /teams/{team-id}/members']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}/members', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
      'team-id': this.teamId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/members']['response']);
  }
}
