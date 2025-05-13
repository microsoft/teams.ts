import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ProtectionUnitClient } from './protectionUnit';
import { SearchClient } from './search';

/**
 * /solutions/backupRestore/restorePoints
 * Provides operations to manage the restorePoints property of the microsoft.graph.backupRestoreRoot entity.
 */
export class RestorePointsClient {
  protected baseUrl = '/solutions/backupRestore/restorePoints';
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
   * `/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit`
   *
   * Provides operations to manage the protectionUnit property of the microsoft.graph.restorePoint entity.
   */
  protectionUnit(restorePointId: string) {
    return new ProtectionUnitClient(restorePointId, this.http);
  }

  /**
   * `/solutions/backupRestore/restorePoints/search`
   *
   * Provides operations to call the search method.
   */
  get search() {
    return new SearchClient(this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restorePoints/{restorePoint-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'restorePoint-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/restorePoints`
   *
   * List of restore points in the tenant.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/restorePoints']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restorePoints',
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
        (res) => res.data as Endpoints['GET /solutions/backupRestore/restorePoints']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/restorePoints/{restorePoint-id}`
   *
   * List of restore points in the tenant.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restorePoints/{restorePoint-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'restorePoint-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restorePoints/{restorePoint-id}',
      [{ name: 'restorePoint-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/restorePoints`
   *
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/restorePoints']['body'],
    params?: Endpoints['POST /solutions/backupRestore/restorePoints']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/restorePoints', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /solutions/backupRestore/restorePoints']['response']
      );
  }
}
