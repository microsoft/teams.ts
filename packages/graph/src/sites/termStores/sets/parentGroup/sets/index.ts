import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ChildrenClient } from './children';
import { RelationsClient } from './relations';
import { TermsClient } from './terms';

/**
 * /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets
 * Provides operations to manage the sets property of the microsoft.graph.termStore.group entity.
 */
export class SetsClient {
  protected baseUrl = '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets';
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
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/children`
   *
   * Provides operations to manage the children property of the microsoft.graph.termStore.set entity.
   */
  children(setId1: string) {
    return new ChildrenClient(setId1, this.http);
  }

  /**
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/relations`
   *
   * Provides operations to manage the relations property of the microsoft.graph.termStore.set entity.
   */
  relations(setId1: string) {
    return new RelationsClient(setId1, this.http);
  }

  /**
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/terms`
   *
   * Provides operations to manage the terms property of the microsoft.graph.termStore.set entity.
   */
  terms(setId1: string) {
    return new TermsClient(setId1, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets`
   *
   * All sets under the group in a term [store].
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets',
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
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}`
   *
   * All sets under the group in a term [store].
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['response']
      );
  }
}
