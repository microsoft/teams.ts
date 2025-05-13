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
 * /me/presence
 * Provides operations to manage the presence property of the microsoft.graph.user entity.
 */
export class PresenceClient {
  protected baseUrl = '/me/presence';
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
   * `/me/presence/clearPresence`
   *
   * Provides operations to call the clearPresence method.
   */
  get clearPresence() {
    return new ClearPresenceClient(this.http);
  }

  /**
   * `/me/presence/clearUserPreferredPresence`
   *
   * Provides operations to call the clearUserPreferredPresence method.
   */
  get clearUserPreferredPresence() {
    return new ClearUserPreferredPresenceClient(this.http);
  }

  /**
   * `/me/presence/setPresence`
   *
   * Provides operations to call the setPresence method.
   */
  get setPresence() {
    return new SetPresenceClient(this.http);
  }

  /**
   * `/me/presence/setStatusMessage`
   *
   * Provides operations to call the setStatusMessage method.
   */
  get setStatusMessage() {
    return new SetStatusMessageClient(this.http);
  }

  /**
   * `/me/presence/setUserPreferredPresence`
   *
   * Provides operations to call the setUserPreferredPresence method.
   */
  get setUserPreferredPresence() {
    return new SetUserPreferredPresenceClient(this.http);
  }

  /**
   * `DELETE /me/presence`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/presence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/presence', [{ name: 'If-Match', in: 'header' }], {
      ...(params || {}),
    });

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /me/presence']['response']);
  }

  /**
   * `GET /me/presence`
   *
   * Get a user&#x27;s presence information.
   */
  async get(params?: Endpoints['GET /me/presence']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/me/presence',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/presence']['response']);
  }

  /**
   * `PATCH /me/presence`
   *
   */
  async update(
    body: Endpoints['PATCH /me/presence']['body'],
    params?: Endpoints['PATCH /me/presence']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/presence', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /me/presence']['response']);
  }
}
