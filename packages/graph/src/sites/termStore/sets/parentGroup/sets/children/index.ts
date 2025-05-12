import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ChildrenChildrenClient } from './childrenChildren';
import { RelationsClient } from './relations';
import { SetClient } from './set';

/**
 * /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children
 * Provides operations to manage the children property of the microsoft.graph.termStore.set entity.
 */
export class ChildrenClient {
  protected baseUrl =
    '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children';
  protected http: http.Client;

  constructor(
    protected readonly setId1: string,
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
   * `/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/children`
   *
   * Provides operations to manage the children property of the microsoft.graph.termStore.term entity.
   */
  childrenChildren(termId: string) {
    return new ChildrenChildrenClient(termId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations`
   *
   * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
   */
  relations(termId: string) {
    return new RelationsClient(termId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/set`
   *
   * Provides operations to manage the set property of the microsoft.graph.termStore.term entity.
   */
  set(termId: string) {
    return new SetClient(termId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
        { name: 'term-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id1': this.setId1,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children`
   *
   * Children terms of set in term [store].
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
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
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id1': this.setId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
   *
   * Children terms of set in term [store].
   */
  async get$1(
    params?: Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
        { name: 'term-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id1': this.setId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
        { name: 'term-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id1': this.setId1,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
      [
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'set-id1': this.setId1,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['response']
      );
  }
}
