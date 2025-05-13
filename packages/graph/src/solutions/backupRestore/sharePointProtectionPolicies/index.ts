import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { SiteInclusionRulesClient } from './siteInclusionRules';
import { SiteProtectionUnitsClient } from './siteProtectionUnits';

/**
 * /solutions/backupRestore/sharePointProtectionPolicies
 * Provides operations to manage the sharePointProtectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
 */
export class SharePointProtectionPoliciesClient {
  protected baseUrl = '/solutions/backupRestore/sharePointProtectionPolicies';
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
   * `/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules`
   *
   * Provides operations to manage the siteInclusionRules property of the microsoft.graph.sharePointProtectionPolicy entity.
   */
  siteInclusionRules(sharePointProtectionPolicyId: string) {
    return new SiteInclusionRulesClient(sharePointProtectionPolicyId, this.http);
  }

  /**
   * `/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits`
   *
   * Provides operations to manage the siteProtectionUnits property of the microsoft.graph.sharePointProtectionPolicy entity.
   */
  siteProtectionUnits(sharePointProtectionPolicyId: string) {
    return new SiteProtectionUnitsClient(sharePointProtectionPolicyId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'sharePointProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies`
   *
   * The list of SharePoint protection policies in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies',
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
          res.data as Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}`
   *
   * The list of SharePoint protection policies in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'sharePointProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}`
   *
   * Update a SharePoint protection policy. This method adds a siteprotectionunit to or removes it from the protection policy.
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
      [{ name: 'sharePointProtectionPolicy-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/sharePointProtectionPolicies`
   *
   * Create a protection policy for a M365 service SharePoint. Policy will be created in inactive state. User can also provide a list of protection units under the policy.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['body'],
    params?: Endpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/sharePointProtectionPolicies', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['response']
      );
  }
}
