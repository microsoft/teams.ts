import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { FromTermClient } from './fromTerm';
import { SetClient } from './set';
import { ToTermClient } from './toTerm';

/**
 * /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations
 * Provides operations to manage the relations property of the microsoft.graph.termStore.set entity.
 */
export class RelationsClient {
  protected baseUrl = '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations';
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
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}/fromTerm`
   *
   * Provides operations to manage the fromTerm property of the microsoft.graph.termStore.relation entity.
   */
  fromTerm(relationId: string) {
    return new FromTermClient(relationId, this.http);
  }

  /**
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}/set`
   *
   * Provides operations to manage the set property of the microsoft.graph.termStore.relation entity.
   */
  set(relationId: string) {
    return new SetClient(relationId, this.http);
  }

  /**
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}/toTerm`
   *
   * Provides operations to manage the toTerm property of the microsoft.graph.termStore.relation entity.
   */
  toTerm(relationId: string) {
    return new ToTermClient(relationId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'relation-id', in: 'path' },
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
          res.data as Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations`
   *
   * Indicates which terms have been pinned or reused directly under the set.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations',
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
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}`
   *
   * Indicates which terms have been pinned or reused directly under the set.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'relation-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'relation-id', in: 'path' },
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
          res.data as Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations/{relation-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id': this.setId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/relations']['response']
      );
  }
}
