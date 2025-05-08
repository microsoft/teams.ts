import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './driveRestoreArtifactsBulkAdditionRequests-types.ts';

/**
 * /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests
 * Provides operations to manage the driveRestoreArtifactsBulkAdditionRequests property of the microsoft.graph.oneDriveForBusinessRestoreSession entity.
 */
export class DriveRestoreArtifactsBulkAdditionRequestsClient {
  protected baseUrl =
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests';
  protected http: http.Client;

  constructor(
    protected readonly oneDriveForBusinessRestoreSessionId: string,
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
   * `DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
        { name: 'driveRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'oneDriveForBusinessRestoreSession-id': this.oneDriveForBusinessRestoreSessionId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'oneDriveForBusinessRestoreSession-id': this.oneDriveForBusinessRestoreSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
        { name: 'driveRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'oneDriveForBusinessRestoreSession-id': this.oneDriveForBusinessRestoreSessionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}',
      [
        { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
        { name: 'driveRestoreArtifactsBulkAdditionRequest-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'oneDriveForBusinessRestoreSession-id': this.oneDriveForBusinessRestoreSessionId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests/{driveRestoreArtifactsBulkAdditionRequest-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['body'],
    params?: Endpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests',
      [{ name: 'oneDriveForBusinessRestoreSession-id', in: 'path' }],
      {
        ...(params || {}),
        'oneDriveForBusinessRestoreSession-id': this.oneDriveForBusinessRestoreSessionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifactsBulkAdditionRequests']['response']
      );
  }
}
