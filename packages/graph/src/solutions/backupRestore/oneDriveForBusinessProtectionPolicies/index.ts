import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { DriveInclusionRulesClient } from './driveInclusionRules';
import { DriveProtectionUnitsClient } from './driveProtectionUnits';

/**
 * /solutions/backupRestore/oneDriveForBusinessProtectionPolicies
 * Provides operations to manage the oneDriveForBusinessProtectionPolicies property of the microsoft.graph.backupRestoreRoot entity.
 */
export class OneDriveForBusinessProtectionPoliciesClient {
  protected baseUrl = '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies';
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
   * `/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules`
   *
   * Provides operations to manage the driveInclusionRules property of the microsoft.graph.oneDriveForBusinessProtectionPolicy entity.
   */
  driveInclusionRules(oneDriveForBusinessProtectionPolicyId: string) {
    return new DriveInclusionRulesClient(oneDriveForBusinessProtectionPolicyId, this.http);
  }

  /**
   * `/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits`
   *
   * Provides operations to manage the driveProtectionUnits property of the microsoft.graph.oneDriveForBusinessProtectionPolicy entity.
   */
  driveProtectionUnits(oneDriveForBusinessProtectionPolicyId: string) {
    return new DriveProtectionUnitsClient(oneDriveForBusinessProtectionPolicyId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies`
   *
   * The list of OneDrive for Business protection policies in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies',
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
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}`
   *
   * The list of OneDrive for Business protection policies in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}`
   *
   * Update the protection policy for the OneDrive service in Microsoft 365. This method adds a driveProtectionUnit to or removes it from a oneDriveForBusinessProtectionPolicy object.
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
      [{ name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies`
   *
   * Create a protection policy for the OneDrive service in Microsoft 365. When the policy is created, its state is set to inactive. Users can also provide a list of protection units under the policy.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['body'],
    params?: Endpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies',
      [],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['response']
      );
  }
}
