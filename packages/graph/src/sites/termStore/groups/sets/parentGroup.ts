import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './parentGroup-types.ts';

/**
 * /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup
 * Provides operations to manage the parentGroup property of the microsoft.graph.termStore.set entity.
 */
export class ParentGroupClient {
  protected baseUrl = '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup';
  protected http: http.Client;

  constructor(
    protected readonly setId: string,
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
   * `DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'group-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id': this.setId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   * The parent [group] that contains the set.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'group-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id': this.setId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup',
      [
        { name: 'site-id', in: 'path' },
        { name: 'group-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id': this.setId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/parentGroup']['response']
      );
  }
}
