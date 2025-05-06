import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { RestorePointClient } from './restorePoint';

/**
 * /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts
 * Provides operations to manage the mailboxRestoreArtifacts property of the microsoft.graph.exchangeRestoreSession entity.
 */
export class MailboxRestoreArtifactsClient {
  protected baseUrl =
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts';
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
   * `/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}/restorePoint`
   *
   * Provides operations to manage the restorePoint property of the microsoft.graph.restoreArtifactBase entity.
   */
  restorePoint(mailboxRestoreArtifactId: string) {
    return new RestorePointClient(mailboxRestoreArtifactId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'mailboxRestoreArtifact-id', in: 'path' },
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
          res.data as Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts`
   *
   * Get a list of the mailboxRestoreArtifact objects that are associated with an exchangeRestoreSession in a tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts',
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
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}`
   *
   * A collection of restore points and destination details that can be used to restore Exchange mailboxes.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'mailboxRestoreArtifact-id', in: 'path' },
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
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}',
      [
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'mailboxRestoreArtifact-id', in: 'path' },
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
          res.data as Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts/{mailboxRestoreArtifact-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['body'],
    params?: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts',
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
          res.data as Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts']['response']
      );
  }
}
