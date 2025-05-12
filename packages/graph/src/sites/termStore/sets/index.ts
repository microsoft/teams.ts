import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ChildrenClient } from './children';
import { ParentGroupClient } from './parentGroup';
import { RelationsClient } from './relations';
import { TermsClient } from './terms';

/**
 * /sites/{site-id}/termStore/sets
 * Provides operations to manage the sets property of the microsoft.graph.termStore.store entity.
 */
export class SetsClient {
  protected baseUrl = '/sites/{site-id}/termStore/sets';
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
   * `/sites/{site-id}/termStore/sets/{set-id}/children`
   *
   * Provides operations to manage the children property of the microsoft.graph.termStore.set entity.
   */
  children(setId: string) {
    return new ChildrenClient(setId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets/{set-id}/parentGroup`
   *
   * Provides operations to manage the parentGroup property of the microsoft.graph.termStore.set entity.
   */
  parentGroup(setId: string) {
    return new ParentGroupClient(setId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets/{set-id}/relations`
   *
   * Provides operations to manage the relations property of the microsoft.graph.termStore.set entity.
   */
  relations(setId: string) {
    return new RelationsClient(setId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets/{set-id}/terms`
   *
   * Provides operations to manage the terms property of the microsoft.graph.termStore.set entity.
   */
  terms(setId: string) {
    return new TermsClient(setId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStore/sets/{set-id}`
   *
   * Delete a set object.
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/termStore/sets/{set-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/termStore/sets`
   *
   * Read the properties and relationships of a set object.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/termStore/sets']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets',
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
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/termStore/sets']['response']);
  }

  /**
   * `GET /sites/{site-id}/termStore/sets/{set-id}`
   *
   * Read the properties and relationships of a set object.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /sites/{site-id}/termStore/sets/{set-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/termStore/sets/{set-id}`
   *
   * Update the properties of a set object.
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets/{set-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'set-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /sites/{site-id}/termStore/sets/{set-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/termStore/sets`
   *
   * Create a new set object.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/termStore/sets']['body'],
    params?: Endpoints['POST /sites/{site-id}/termStore/sets']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/sets',
      [{ name: 'site-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/termStore/sets']['response']);
  }
}
