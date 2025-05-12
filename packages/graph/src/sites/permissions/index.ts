import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { GrantClient } from './grant';

/**
 * /sites/{site-id}/permissions
 * Provides operations to manage the permissions property of the microsoft.graph.site entity.
 */
export class PermissionsClient {
  protected baseUrl = '/sites/{site-id}/permissions';
  protected http: http.Client;

  constructor(
    protected readonly siteId: string,
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
   * `/sites/{site-id}/permissions/{permission-id}/grant`
   *
   * Provides operations to call the grant method.
   */
  grant(permissionId: string) {
    return new GrantClient(permissionId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/permissions/{permission-id}`
   *
   * Delete a permission object on a site.
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/permissions/{permission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/permissions/{permission-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'permission-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/permissions/{permission-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/permissions`
   *
   * Get the permission resources from the permissions navigation property on a site.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/permissions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/permissions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/permissions']['response']);
  }

  /**
   * `GET /sites/{site-id}/permissions/{permission-id}`
   *
   * Retrieve the properties and relationships of a permission object on a site.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/permissions/{permission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/permissions/{permission-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'permission-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/permissions/{permission-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/permissions/{permission-id}`
   *
   * Update an application permission object on a site.
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/permissions/{permission-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'permission-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/permissions`
   *
   * Create a new permission object on a site.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/permissions']['body'],
    params?: Endpoints['POST /sites/{site-id}/permissions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/permissions', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/permissions']['response']);
  }
}
