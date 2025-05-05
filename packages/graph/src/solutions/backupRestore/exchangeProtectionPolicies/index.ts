import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { MailboxInclusionRulesClient } from './mailboxInclusionRules';
import { MailboxProtectionUnitsClient } from './mailboxProtectionUnits';

/**
 * /solutions/backupRestore/exchangeProtectionPolicies
 * Provides operations to manage the exchangeProtectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
 */
export class ExchangeProtectionPoliciesClient {
  protected baseUrl = '/solutions/backupRestore/exchangeProtectionPolicies';
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
   * `/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules`
   *
   * Provides operations to manage the mailboxInclusionRules property of the microsoft.graph.exchangeProtectionPolicy entity.
   */
  mailboxInclusionRules(exchangeProtectionPolicyId: string) {
    return new MailboxInclusionRulesClient(exchangeProtectionPolicyId, this.http);
  }

  /**
   * `/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits`
   *
   * Provides operations to manage the mailboxProtectionUnits property of the microsoft.graph.exchangeProtectionPolicy entity.
   */
  mailboxProtectionUnits(exchangeProtectionPolicyId: string) {
    return new MailboxProtectionUnitsClient(exchangeProtectionPolicyId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'exchangeProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies`
   *
   * The list of Exchange protection policies in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeProtectionPolicies',
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
          res.data as Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}`
   *
   * The list of Exchange protection policies in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'exchangeProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}`
   *
   * Update an Exchange protection policy. This method adds a mailboxprotectionunit to or removes it from the protection policy.
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
      [{ name: 'exchangeProtectionPolicy-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/exchangeProtectionPolicies`
   *
   * Create a protection policy for the Exchange service in a Microsoft 365 tenant. The policy is set to inactive when it is created. Users can also provide a list of protection units under the policy.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['body'],
    params?: Endpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/exchangeProtectionPolicies', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['response']
      );
  }
}
