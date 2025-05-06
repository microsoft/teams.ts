import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ActivateClient } from './activate';
import { DeactivateClient } from './deactivate';

/**
 * /solutions/backupRestore/serviceApps
 * Provides operations to manage the serviceApps property of the microsoft.graph.backupRestoreRoot entity.
 */
export class ServiceAppsClient {
  protected baseUrl = '/solutions/backupRestore/serviceApps';
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
   * `/solutions/backupRestore/serviceApps/{serviceApp-id}/activate`
   *
   * Provides operations to call the activate method.
   */
  activate(serviceAppId: string) {
    return new ActivateClient(serviceAppId, this.http);
  }

  /**
   * `/solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate`
   *
   * Provides operations to call the deactivate method.
   */
  deactivate(serviceAppId: string) {
    return new DeactivateClient(serviceAppId, this.http);
  }

  /**
   * `DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}`
   *
   * Delete a serviceApp.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/serviceApps/{serviceApp-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'serviceApp-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
      );
  }

  /**
   * `GET /solutions/backupRestore/serviceApps`
   *
   * Get a list of serviceApp objects and their properties.
   */
  async list(
    params?: Endpoints['GET /solutions/backupRestore/serviceApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/serviceApps',
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
      .then((res) => res.data as Endpoints['GET /solutions/backupRestore/serviceApps']['response']);
  }

  /**
   * `GET /solutions/backupRestore/serviceApps/{serviceApp-id}`
   *
   * Read the properties and relationships of a serviceApp object.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/serviceApps/{serviceApp-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'serviceApp-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['body'],
    params?: Endpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/serviceApps/{serviceApp-id}',
      [{ name: 'serviceApp-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
      );
  }

  /**
   * `POST /solutions/backupRestore/serviceApps`
   *
   * Create a new serviceApp.
   */
  async create(
    body: Endpoints['POST /solutions/backupRestore/serviceApps']['body'],
    params?: Endpoints['POST /solutions/backupRestore/serviceApps']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/backupRestore/serviceApps', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /solutions/backupRestore/serviceApps']['response']
      );
  }
}
