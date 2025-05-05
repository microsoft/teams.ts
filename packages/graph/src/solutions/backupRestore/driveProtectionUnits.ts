import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './driveProtectionUnits-types.ts';

/**
 * /solutions/backupRestore/driveProtectionUnits
 * Provides operations to manage the driveProtectionUnits property of the microsoft.graph.backupRestoreRoot entity.
 */
export class DriveProtectionUnitsClient {
  protected baseUrl = '/solutions/backupRestore/driveProtectionUnits';
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
   * `DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'driveProtectionUnit-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/driveProtectionUnits`
   *
   * The list of drive protection units in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/driveProtectionUnits']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnits',
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
          res.data as Endpoints['GET /solutions/backupRestore/driveProtectionUnits']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
   *
   * The list of drive protection units in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'driveProtectionUnit-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
      [{ name: 'driveProtectionUnit-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/driveProtectionUnits`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/driveProtectionUnits']['body'],
    params?: Endpoints['POST /solutions/backupRestore/driveProtectionUnits']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/driveProtectionUnits', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/backupRestore/driveProtectionUnits']['response']
      );
  }
}
