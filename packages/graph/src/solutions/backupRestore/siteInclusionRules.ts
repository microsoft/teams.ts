import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './siteInclusionRules-types.ts';

/**
 * /solutions/backupRestore/siteInclusionRules
 * Provides operations to manage the siteInclusionRules property of the microsoft.graph.backupRestoreRoot entity.
 */
export class SiteInclusionRulesClient {
  protected baseUrl = '/solutions/backupRestore/siteInclusionRules';
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
   * `DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'siteProtectionRule-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/siteInclusionRules`
   *
   * The list of site inclusion rules applied to the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/siteInclusionRules']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteInclusionRules',
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
          res.data as Endpoints['GET /solutions/backupRestore/siteInclusionRules']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
   *
   * The list of site inclusion rules applied to the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'siteProtectionRule-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
      [{ name: 'siteProtectionRule-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/siteInclusionRules`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/siteInclusionRules']['body'],
    params?: Endpoints['POST /solutions/backupRestore/siteInclusionRules']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/siteInclusionRules', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/siteInclusionRules']['response']
      );
  }
}
