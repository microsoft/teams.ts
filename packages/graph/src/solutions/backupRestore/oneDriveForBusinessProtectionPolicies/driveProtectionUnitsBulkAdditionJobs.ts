import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './driveProtectionUnitsBulkAdditionJobs-types.ts';

/**
 * /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs
 * Provides operations to manage the driveProtectionUnitsBulkAdditionJobs property of the microsoft.graph.oneDriveForBusinessProtectionPolicy entity.
 */
export class DriveProtectionUnitsBulkAdditionJobsClient {
  protected baseUrl =
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs';
  protected http: http.Client;

  constructor(
    protected readonly oneDriveForBusinessProtectionPolicyId: string,
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
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'oneDriveForBusinessProtectionPolicy-id': this.oneDriveForBusinessProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
        { name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'oneDriveForBusinessProtectionPolicy-id': this.oneDriveForBusinessProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }
}
