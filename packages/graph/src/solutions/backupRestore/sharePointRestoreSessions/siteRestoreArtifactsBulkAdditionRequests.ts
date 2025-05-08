import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './siteRestoreArtifactsBulkAdditionRequests-types.ts';

/**
 * /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests
 * Provides operations to manage the siteRestoreArtifactsBulkAdditionRequests property of the microsoft.graph.sharePointRestoreSession entity.
 */
export class SiteRestoreArtifactsBulkAdditionRequestsClient {
  protected baseUrl =
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests';
  protected http: http.Client;

  constructor(
    protected readonly sharePointRestoreSessionId: string,
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
   * `DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'sharePointRestoreSession-id', in: 'path' },
        { name: 'siteRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointRestoreSession-id': this.sharePointRestoreSessionId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointRestoreSession-id': this.sharePointRestoreSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointRestoreSession-id', in: 'path' },
        { name: 'siteRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointRestoreSession-id': this.sharePointRestoreSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: 'sharePointRestoreSession-id', in: 'path' },
        { name: 'siteRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointRestoreSession-id': this.sharePointRestoreSessionId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests/{siteRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['body'],
    params?: Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests',
      [{ name: 'sharePointRestoreSession-id', in: 'path' }],
      {
        ...(params || {}),
        'sharePointRestoreSession-id': this.sharePointRestoreSessionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifactsBulkAdditionRequests']['response']
      );
  }
}
