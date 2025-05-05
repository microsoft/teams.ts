import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ClearPresenceClient } from './clearPresence';
import { ClearUserPreferredPresenceClient } from './clearUserPreferredPresence';
import { SetPresenceClient } from './setPresence';
import { SetStatusMessageClient } from './setStatusMessage';
import { SetUserPreferredPresenceClient } from './setUserPreferredPresence';

/**
 * /users/{user-id}/presence
 * Provides operations to manage the presence property of the microsoft.graph.user entity.
 */
export class PresenceClient {
  protected baseUrl = '/users/{user-id}/presence';
  protected http: http.Client;

  constructor(
    protected readonly userId: string,
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
   * `/users/{user-id}/presence/clearPresence`
   *
   * Provides operations to call the clearPresence method.
   */
  get clearPresence() {
    return new ClearPresenceClient(this.http);
  }

  /**
   * `/users/{user-id}/presence/clearUserPreferredPresence`
   *
   * Provides operations to call the clearUserPreferredPresence method.
   */
  get clearUserPreferredPresence() {
    return new ClearUserPreferredPresenceClient(this.http);
  }

  /**
   * `/users/{user-id}/presence/setPresence`
   *
   * Provides operations to call the setPresence method.
   */
  get setPresence() {
    return new SetPresenceClient(this.http);
  }

  /**
   * `/users/{user-id}/presence/setStatusMessage`
   *
   * Provides operations to call the setStatusMessage method.
   */
  get setStatusMessage() {
    return new SetStatusMessageClient(this.http);
  }

  /**
   * `/users/{user-id}/presence/setUserPreferredPresence`
   *
   * Provides operations to call the setUserPreferredPresence method.
   */
  get setUserPreferredPresence() {
    return new SetUserPreferredPresenceClient(this.http);
  }

  /**
   * `DELETE /users/{user-id}/presence`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/presence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/presence',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'user-id': this.userId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /users/{user-id}/presence']['response']);
  }

  /**
   * `GET /users/{user-id}/presence`
   *
   * Get a user&#x27;s presence information.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/presence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/presence',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'user-id': this.userId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /users/{user-id}/presence']['response']);
  }

  /**
   * `PATCH /users/{user-id}/presence`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/presence']['body'],
    params?: Endpoints['PATCH /users/{user-id}/presence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/users/{user-id}/presence', [{ name: 'user-id', in: 'path' }], {
      ...(params || {}),
      'user-id': this.userId,
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /users/{user-id}/presence']['response']);
  }
}
