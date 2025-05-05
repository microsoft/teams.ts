import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { GranularMailboxRestoreArtifactsClient } from './granularMailboxRestoreArtifacts';
import { MailboxRestoreArtifactsClient } from './mailboxRestoreArtifacts';

/**
 * /solutions/backupRestore/exchangeRestoreSessions
 * Provides operations to manage the exchangeRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
 */
export class ExchangeRestoreSessionsClient {
  protected baseUrl = '/solutions/backupRestore/exchangeRestoreSessions';
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
   * `/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/granularMailboxRestoreArtifacts`
   *
   * Provides operations to manage the granularMailboxRestoreArtifacts property of the microsoft.graph.exchangeRestoreSession entity.
   */
  granularMailboxRestoreArtifacts(exchangeRestoreSessionId: string) {
    return new GranularMailboxRestoreArtifactsClient(exchangeRestoreSessionId, this.http);
  }

  /**
   * `/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}/mailboxRestoreArtifacts`
   *
   * Provides operations to manage the mailboxRestoreArtifacts property of the microsoft.graph.exchangeRestoreSession entity.
   */
  mailboxRestoreArtifacts(exchangeRestoreSessionId: string) {
    return new MailboxRestoreArtifactsClient(exchangeRestoreSessionId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions`
   *
   * The list of Exchange restore sessions available in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions',
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
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}`
   *
   * The list of Exchange restore sessions available in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}`
   *
   * Update the properties of an exchangeRestoreSession.
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}',
      [{ name: 'exchangeRestoreSession-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/exchangeRestoreSessions`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['body'],
    params?: Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/exchangeRestoreSessions', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/exchangeRestoreSessions']['response']
      );
  }
}
