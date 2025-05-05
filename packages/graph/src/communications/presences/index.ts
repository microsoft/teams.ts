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
 * /communications/presences
 * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
 */
export class PresencesClient {
  protected baseUrl = '/communications/presences';
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
   * `/communications/presences/{presence-id}/clearPresence`
   *
   * Provides operations to call the clearPresence method.
   */
  clearPresence(presenceId: string) {
    return new ClearPresenceClient(presenceId, this.http);
  }

  /**
   * `/communications/presences/{presence-id}/clearUserPreferredPresence`
   *
   * Provides operations to call the clearUserPreferredPresence method.
   */
  clearUserPreferredPresence(presenceId: string) {
    return new ClearUserPreferredPresenceClient(presenceId, this.http);
  }

  /**
   * `/communications/presences/{presence-id}/setPresence`
   *
   * Provides operations to call the setPresence method.
   */
  setPresence(presenceId: string) {
    return new SetPresenceClient(presenceId, this.http);
  }

  /**
   * `/communications/presences/{presence-id}/setStatusMessage`
   *
   * Provides operations to call the setStatusMessage method.
   */
  setStatusMessage(presenceId: string) {
    return new SetStatusMessageClient(presenceId, this.http);
  }

  /**
   * `/communications/presences/{presence-id}/setUserPreferredPresence`
   *
   * Provides operations to call the setUserPreferredPresence method.
   */
  setUserPreferredPresence(presenceId: string) {
    return new SetUserPreferredPresenceClient(presenceId, this.http);
  }

  /**
   * `DELETE /communications/presences/{presence-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /communications/presences/{presence-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences/{presence-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'presence-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /communications/presences/{presence-id}']['response']
      );
  }

  /**
   * `GET /communications/presences`
   *
   * Get a user&#x27;s presence information.
   */
  async list(
    params?: Endpoints['GET /communications/presences']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences',
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
      .then((res) => res.data as Endpoints['GET /communications/presences']['response']);
  }

  /**
   * `GET /communications/presences/{presence-id}`
   *
   * Get a user&#x27;s presence information.
   */
  async get(
    params?: Endpoints['GET /communications/presences/{presence-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences/{presence-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'presence-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /communications/presences/{presence-id}']['response']
      );
  }

  /**
   * `PATCH /communications/presences/{presence-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /communications/presences/{presence-id}']['body'],
    params?: Endpoints['PATCH /communications/presences/{presence-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/communications/presences/{presence-id}',
      [{ name: 'presence-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /communications/presences/{presence-id}']['response']
      );
  }

  /**
   * `POST /communications/presences`
   *
   */
  async create(
    body: Endpoints['POST /communications/presences']['body'],
    params?: Endpoints['POST /communications/presences']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/communications/presences', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /communications/presences']['response']);
  }
}
