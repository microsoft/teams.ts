import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './siteProtectionUnitsBulkAdditionJobs-types.ts';

/**
 * /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs
 * Provides operations to manage the siteProtectionUnitsBulkAdditionJobs property of the microsoft.graph.sharePointProtectionPolicy entity.
 */
export class SiteProtectionUnitsBulkAdditionJobsClient {
  protected baseUrl =
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs';
  protected http: http.Client;

  constructor(
    protected readonly sharePointProtectionPolicyId: string,
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
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointProtectionPolicy-id': this.sharePointProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointProtectionPolicy-id', in: 'path' },
        { name: 'siteProtectionUnitsBulkAdditionJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sharePointProtectionPolicy-id': this.sharePointProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }
}
