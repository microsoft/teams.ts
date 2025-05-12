import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { GroupsClient } from './groups';
import { SetsClient } from './sets';

/**
 * /sites/{site-id}/termStores
 * Provides operations to manage the termStores property of the microsoft.graph.site entity.
 */
export class TermStoresClient {
  protected baseUrl = '/sites/{site-id}/termStores';
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
   * `/sites/{site-id}/termStores/{store-id}/groups`
   *
   * Provides operations to manage the groups property of the microsoft.graph.termStore.store entity.
   */
  groups(storeId: string) {
    return new GroupsClient(storeId, this.http);
  }

  /**
   * `/sites/{site-id}/termStores/{store-id}/sets`
   *
   * Provides operations to manage the sets property of the microsoft.graph.termStore.store entity.
   */
  sets(storeId: string) {
    return new SetsClient(storeId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStores/{store-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStores/{store-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /sites/{site-id}/termStores/{store-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores`
   *
   * The collection of termStores under this site.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/termStores']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores',
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
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/termStores']['response']);
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}`
   *
   * The collection of termStores under this site.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStores/{store-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /sites/{site-id}/termStores/{store-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStores`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStores']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStores']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/termStores', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/termStores']['response']);
  }
}
