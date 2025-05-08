import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './mailboxRestoreArtifactsBulkAdditionRequests-types.ts';

/**
 * /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests
 * Provides operations to manage the mailboxRestoreArtifactsBulkAdditionRequests property of the microsoft.graph.exchangeRestoreSession entity.
 */
export class MailboxRestoreArtifactsBulkAdditionRequestsClient {
  protected baseUrl =
    '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests';
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
   * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'mailboxRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
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
          res.data as Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests',
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
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'mailboxRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
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
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: 'exchangeRestoreSession-id', in: 'path' },
        { name: 'mailboxRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
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
          res.data as Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests/{mailboxRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['body'],
    params?: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests',
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
          res.data as Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifactsBulkAdditionRequests']['response']
      );
  }
}
