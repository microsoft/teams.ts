import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ActivateClient } from './activate';

/**
 * /solutions/backupRestore/restoreSessions
 * Provides operations to manage the restoreSessions property of the microsoft.graph.backupRestoreRoot entity.
 */
export class RestoreSessionsClient {
  protected baseUrl = '/solutions/backupRestore/restoreSessions';
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
   * `/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate`
   *
   * Provides operations to call the activate method.
   */
  activate(restoreSessionBaseId: string) {
    return new ActivateClient(restoreSessionBaseId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
   *
   * Delete a draft restoreSessionBase object.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'restoreSessionBase-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/restoreSessions`
   *
   * Get a list of restoreSession objects and their properties.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/restoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restoreSessions',
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
      .then(
        (res) => res.data as Endpoints['GET /solutions/backupRestore/restoreSessions']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
   *
   * Get the properties of a restoreSession object by ID.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'restoreSessionBase-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
      [{ name: 'restoreSessionBase-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/restoreSessions`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/restoreSessions']['body'],
    params?: Endpoints['POST /solutions/backupRestore/restoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/restoreSessions', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /solutions/backupRestore/restoreSessions']['response']
      );
  }
}
