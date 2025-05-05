import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './driveInclusionRules-types.ts';

/**
 * /solutions/backupRestore/driveInclusionRules
 * Provides operations to manage the driveInclusionRules property of the microsoft.graph.backupRestoreRoot entity.
 */
export class DriveInclusionRulesClient {
  protected baseUrl = '/solutions/backupRestore/driveInclusionRules';
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
   * `DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'driveProtectionRule-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/driveInclusionRules`
   *
   * The list of drive inclusion rules applied to the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/driveInclusionRules']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveInclusionRules',
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
          res.data as Endpoints['GET /solutions/backupRestore/driveInclusionRules']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
   *
   * The list of drive inclusion rules applied to the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'driveProtectionRule-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
      [{ name: 'driveProtectionRule-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/driveInclusionRules`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/driveInclusionRules']['body'],
    params?: Endpoints['POST /solutions/backupRestore/driveInclusionRules']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/driveInclusionRules', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/driveInclusionRules']['response']
      );
  }
}
