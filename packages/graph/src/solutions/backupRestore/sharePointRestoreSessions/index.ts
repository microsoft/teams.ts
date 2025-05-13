import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { SiteRestoreArtifactsClient } from './siteRestoreArtifacts';

/**
 * /solutions/backupRestore/sharePointRestoreSessions
 * Provides operations to manage the sharePointRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
 */
export class SharePointRestoreSessionsClient {
  protected baseUrl = '/solutions/backupRestore/sharePointRestoreSessions';
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
   * `/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts`
   *
   * Provides operations to manage the siteRestoreArtifacts property of the microsoft.graph.sharePointRestoreSession entity.
   */
  siteRestoreArtifacts(sharePointRestoreSessionId: string) {
    return new SiteRestoreArtifactsClient(sharePointRestoreSessionId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'sharePointRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions`
   *
   * The list of SharePoint restore sessions available in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions',
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
          res.data as Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}`
   *
   * The list of SharePoint restore sessions available in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}',
      [{ name: 'sharePointRestoreSession-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/sharePointRestoreSessions`
   *
   * Create a new sharePointRestoreSession object.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['body'],
    params?: Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/sharePointRestoreSessions', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions']['response']
      );
  }
}
