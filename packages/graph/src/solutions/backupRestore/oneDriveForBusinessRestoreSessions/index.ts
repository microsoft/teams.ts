import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { DriveRestoreArtifactsClient } from './driveRestoreArtifacts';

/**
 * /solutions/backupRestore/oneDriveForBusinessRestoreSessions
 * Provides operations to manage the oneDriveForBusinessRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
 */
export class OneDriveForBusinessRestoreSessionsClient {
  protected baseUrl = '/solutions/backupRestore/oneDriveForBusinessRestoreSessions';
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
   * `/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts`
   *
   * Provides operations to manage the driveRestoreArtifacts property of the microsoft.graph.oneDriveForBusinessRestoreSession entity.
   */
  driveRestoreArtifacts(oneDriveForBusinessRestoreSessionId: string) {
    return new DriveRestoreArtifactsClient(oneDriveForBusinessRestoreSessionId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions`
   *
   * The list of OneDrive for Business restore sessions available in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions',
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
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}`
   *
   * The list of OneDrive for Business restore sessions available in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}`
   *
   * Update the properties of a oneDriveForBusinessRestoreSession object.
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}',
      [{ name: 'oneDriveForBusinessRestoreSession-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['body'],
    params?: Endpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/oneDriveForBusinessRestoreSessions', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions']['response']
      );
  }
}
