import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { FromTermClient } from './fromTerm';
import { SetClient } from './set';
import { ToTermClient } from './toTerm';

/**
 * /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations
 * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
 */
export class RelationsClient {
  protected baseUrl = '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations';
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
   * `/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/fromTerm`
   *
   * Provides operations to manage the fromTerm property of the microsoft.graph.termStore.relation entity.
   */
  fromTerm(relationId: string) {
    return new FromTermClient(relationId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/set`
   *
   * Provides operations to manage the set property of the microsoft.graph.termStore.relation entity.
   */
  set(relationId: string) {
    return new SetClient(relationId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}/toTerm`
   *
   * Provides operations to manage the toTerm property of the microsoft.graph.termStore.relation entity.
   */
  toTerm(relationId: string) {
    return new ToTermClient(relationId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'term-id', in: 'path' },
        { name: 'relation-id', in: 'path' },
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
          res.data as Endpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations`
   *
   * To indicate which terms are related to the current term as either pinned or reused.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations',
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
          res.data as Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
   *
   * To indicate which terms are related to the current term as either pinned or reused.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'term-id', in: 'path' },
        { name: 'relation-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'term-id', in: 'path' },
        { name: 'relation-id', in: 'path' },
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
          res.data as Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations/{relation-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations',
      [
        { name: 'site-id', in: 'path' },
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
          res.data as Endpoints['POST /sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations']['response']
      );
  }
}
