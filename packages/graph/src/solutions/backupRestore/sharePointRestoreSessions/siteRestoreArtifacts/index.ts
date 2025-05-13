import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { RestorePointClient } from './restorePoint';

/**
 * /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts
 * Provides operations to manage the siteRestoreArtifacts property of the microsoft.graph.sharePointRestoreSession entity.
 */
export class SiteRestoreArtifactsClient {
  protected baseUrl =
    '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts';
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
   * `/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}/restorePoint`
   *
   * Provides operations to manage the restorePoint property of the microsoft.graph.restoreArtifactBase entity.
   */
  restorePoint(siteRestoreArtifactId: string) {
    return new RestorePointClient(siteRestoreArtifactId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'sharePointRestoreSession-id', in: 'path' },
        { name: 'siteRestoreArtifact-id', in: 'path' },
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
          res.data as Endpoints['DELETE /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts`
   *
   * List all the siteRestoreArtifact objects for a sharePointRestoreSession for the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts',
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
          res.data as Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}`
   *
   * A collection of restore points and destination details that can be used to restore SharePoint sites.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointRestoreSession-id', in: 'path' },
        { name: 'siteRestoreArtifact-id', in: 'path' },
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
          res.data as Endpoints['GET /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}',
      [
        { name: 'sharePointRestoreSession-id', in: 'path' },
        { name: 'siteRestoreArtifact-id', in: 'path' },
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
          res.data as Endpoints['PATCH /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts/{siteRestoreArtifact-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['body'],
    params?: Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts',
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
          res.data as Endpoints['POST /solutions/backupRestore/sharePointRestoreSessions/{sharePointRestoreSession-id}/siteRestoreArtifacts']['response']
      );
  }
}
