import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './mailboxProtectionUnitsBulkAdditionJobs-types.ts';

/**
 * /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs
 * Provides operations to manage the mailboxProtectionUnitsBulkAdditionJobs property of the microsoft.graph.exchangeProtectionPolicy entity.
 */
export class MailboxProtectionUnitsBulkAdditionJobsClient {
  protected baseUrl =
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs';
  protected http: http.Client;

  constructor(
    protected readonly exchangeProtectionPolicyId: string,
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
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs`
   *
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'exchangeProtectionPolicy-id': this.exchangeProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
   *
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeProtectionPolicy-id', in: 'path' },
        { name: 'mailboxProtectionUnitsBulkAdditionJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'exchangeProtectionPolicy-id': this.exchangeProtectionPolicyId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
      );
  }
}
