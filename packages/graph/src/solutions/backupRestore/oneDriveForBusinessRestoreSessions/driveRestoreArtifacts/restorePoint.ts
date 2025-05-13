import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './restorePoint-types.ts';

/**
 * /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}/restorePoint
 * Provides operations to manage the restorePoint property of the microsoft.graph.restoreArtifactBase entity.
 */
export class RestorePointClient {
  protected baseUrl =
    '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}/restorePoint';
  protected http: http.Client;

  constructor(
    protected readonly driveRestoreArtifactId: string,
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
   * `GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}/restorePoint`
   *
   * Represents the date and time when an artifact is protected by a protectionPolicy and can be restored.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}/restorePoint']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}/restorePoint',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'oneDriveForBusinessRestoreSession-id', in: 'path' },
        { name: 'driveRestoreArtifact-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'driveRestoreArtifact-id': this.driveRestoreArtifactId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession-id}/driveRestoreArtifacts/{driveRestoreArtifact-id}/restorePoint']['response']
      );
  }
}
