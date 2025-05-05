import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { RestorePointClient } from './restorePoint';

/**
 * /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts
 * Provides operations to manage the granularMailboxRestoreArtifacts property of the microsoft.graph.exchangeRestoreSession entity.
 */
export class GranularMailboxRestoreArtifactsClient {
  protected baseUrl =
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts';
  protected http: http.Client;

  constructor(
    protected readonly exchangeRestoreSessionId: string,
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
   * `/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}/restorePoint`
   *
   * Provides operations to manage the restorePoint property of the microsoft.graph.restoreArtifactBase entity.
   */
  restorePoint(granularMailboxRestoreArtifactId: string) {
    return new RestorePointClient(granularMailboxRestoreArtifactId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'granularMailboxRestoreArtifact-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'exchangeRestoreSession-id': this.exchangeRestoreSessionId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'exchangeRestoreSession-id': this.exchangeRestoreSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'granularMailboxRestoreArtifact-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'exchangeRestoreSession-id': this.exchangeRestoreSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}',
      [
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'granularMailboxRestoreArtifact-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'exchangeRestoreSession-id': this.exchangeRestoreSessionId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts/{granularMailboxRestoreArtifact-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['body'],
    params?: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts',
      [{ name: 'exchangeRestoreSession-id', in: 'path' }],
      {
        ...(params || {}),
        'exchangeRestoreSession-id': this.exchangeRestoreSessionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts']['response']
      );
  }
}
