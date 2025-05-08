import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './driveProtectionUnitsBulkAdditionJobs-types.ts';

/**
 * /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs
 * Provides operations to manage the driveProtectionUnitsBulkAdditionJobs property of the microsoft.graph.backupRestoreRoot entity.
 */
export class DriveProtectionUnitsBulkAdditionJobsClient {
  protected baseUrl = '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs';
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
   * `DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
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
          res.data as Endpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      [{ name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['body'],
    params?: Endpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
      [],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['response']
      );
  }
}
