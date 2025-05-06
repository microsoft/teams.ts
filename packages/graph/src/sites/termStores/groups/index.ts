import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { SetsClient } from './sets';

/**
 * /sites/{site-id}/termStores/{store-id}/groups
 * Provides operations to manage the groups property of the microsoft.graph.termStore.store entity.
 */
export class GroupsClient {
  protected baseUrl = '/sites/{site-id}/termStores/{store-id}/groups';
  protected http: http.Client;

  constructor(
    protected readonly storeId: string,
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
   * `/sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets`
   *
   * Provides operations to manage the sets property of the microsoft.graph.termStore.group entity.
   */
  sets(groupId: string) {
    return new SetsClient(groupId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'group-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'store-id': this.storeId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/groups`
   *
   * Collection of all groups available in the term store.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/groups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/groups',
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
        { name: 'store-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'store-id': this.storeId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/groups']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}`
   *
   * Collection of all groups available in the term store.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'group-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'store-id': this.storeId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'group-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'store-id': this.storeId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStores/{store-id}/groups`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStores/{store-id}/groups']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStores/{store-id}/groups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/groups',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'store-id': this.storeId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/termStores/{store-id}/groups']['response']
      );
  }
}
