import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ChatsClient } from './chats';
import { OnlineMeetingsClient } from './onlineMeetings';
import { PresenceClient } from './presence';
import { TeamworkClient } from './teamwork';

/**
 * /users
 * Provides operations to manage the collection of user entities.
 */
export class UsersClient {
  protected baseUrl = '/users';
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
   * `/users/{user-id}/chats`
   *
   * Provides operations to manage the chats property of the microsoft.graph.user entity.
   */
  chats(userId: string) {
    return new ChatsClient(userId, this.http);
  }

  /**
   * `/users/{user-id}/onlineMeetings`
   *
   * Provides operations to manage the onlineMeetings property of the microsoft.graph.user entity.
   */
  onlineMeetings(userId: string) {
    return new OnlineMeetingsClient(userId, this.http);
  }

  /**
   * `/users/{user-id}/presence`
   *
   * Provides operations to manage the presence property of the microsoft.graph.user entity.
   */
  presence(userId: string) {
    return new PresenceClient(userId, this.http);
  }

  /**
   * `/users/{user-id}/teamwork`
   *
   * Provides operations to manage the teamwork property of the microsoft.graph.user entity.
   */
  teamwork(userId: string) {
    return new TeamworkClient(userId, this.http);
  }

  /**
   * `DELETE /users/{user-id}`
   *
   * Deletes a user.
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /users/{user-id}']['response']);
  }

  /**
   * `GET /users`
   *
   * Retrieve a list of user objects.
   */
  async list(params?: Endpoints['GET /users']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/users',
      [
        { name: 'ConsistencyLevel', in: 'header' },
        { name: '$top', in: 'query' },
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
      .then((res) => res.data as Endpoints['GET /users']['response']);
  }

  /**
   * `GET /users/{user-id}`
   *
   * Read properties and relationships of the user object.
   */
  async get(params?: Endpoints['GET /users/{user-id}']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/users/{user-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /users/{user-id}']['response']);
  }

  /**
   * `PATCH /users/{user-id}`
   *
   * Update the properties of a user object.
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/users/{user-id}', [{ name: 'user-id', in: 'path' }], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /users/{user-id}']['response']);
  }

  /**
   * `POST /users`
   *
   * Create a new user.
The request body contains the user to create. At a minimum, you must specify the required properties for the user. You can optionally specify any other writable properties.
   */
  async create(
    body: Endpoints['POST /users']['body'],
    params?: Endpoints['POST /users']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/users', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /users']['response']);
  }
}
