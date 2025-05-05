import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './siteProtectionUnits-types.ts';

/**
 * /solutions/backupRestore/siteProtectionUnits
 * Provides operations to manage the siteProtectionUnits property of the microsoft.graph.backupRestoreRoot entity.
 */
export class SiteProtectionUnitsClient {
  protected baseUrl = '/solutions/backupRestore/siteProtectionUnits';
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
   * `DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'siteProtectionUnit-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/siteProtectionUnits`
   *
   * The list of site protection units in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/siteProtectionUnits']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnits',
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
          res.data as Endpoints['GET /solutions/backupRestore/siteProtectionUnits']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   * The list of site protection units in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'siteProtectionUnit-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
      [{ name: 'siteProtectionUnit-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/siteProtectionUnits`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/siteProtectionUnits']['body'],
    params?: Endpoints['POST /solutions/backupRestore/siteProtectionUnits']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/siteProtectionUnits', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/siteProtectionUnits']['response']
      );
  }
}
