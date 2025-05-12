import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { RelationsClient } from './relations';
import { SetClient } from './set';

/**
 * /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children
 * Provides operations to manage the children property of the microsoft.graph.termStore.term entity.
 */
export class ChildrenClient {
  protected baseUrl =
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children';
  protected http: http.Client;

  constructor(
    protected readonly termId: string,
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
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations`
   *
   * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
   */
  relations(termId1: string) {
    return new RelationsClient(termId1, this.http);
  }

  /**
   * `/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}/set`
   *
   * Provides operations to manage the set property of the microsoft.graph.termStore.term entity.
   */
  set(termId1: string) {
    return new SetClient(termId1, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'term-id', in: 'path' },
        { name: 'term-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'term-id': this.termId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children`
   *
   * Children of current term.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children',
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
        { name: 'term-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'term-id': this.termId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
   *
   * Children of current term.
   */
  async get$1(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'term-id', in: 'path' },
        { name: 'term-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'term-id': this.termId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'term-id', in: 'path' },
        { name: 'term-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'term-id': this.termId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children',
      [
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'term-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'term-id': this.termId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/termStores/{store-id}/sets/{set-id}/terms/{term-id}/children']['response']
      );
  }
}
