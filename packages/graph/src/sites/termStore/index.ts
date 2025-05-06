import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { GroupsClient } from './groups';
import { SetsClient } from './sets';

/**
 * /sites/{site-id}/termStore
 * Provides operations to manage the termStore property of the microsoft.graph.site entity.
 */
export class TermStoreClient {
  protected baseUrl = '/sites/{site-id}/termStore';
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
   * `/sites/{site-id}/termStore/groups`
   *
   * Provides operations to manage the groups property of the microsoft.graph.termStore.store entity.
   */
  get groups() {
    return new GroupsClient(this.http);
  }

  /**
   * `/sites/{site-id}/termStore/sets`
   *
   * Provides operations to manage the sets property of the microsoft.graph.termStore.store entity.
   */
  get sets() {
    return new SetsClient(this.http);
  }

  /**
   * `DELETE /sites/{site-id}/termStore`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/termStore']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'site-id': this.siteId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /sites/{site-id}/termStore']['response']);
  }

  /**
   * `GET /sites/{site-id}/termStore`
   *
   * Read the properties and relationships of a store object.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStore']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore',
      [
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
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/termStore']['response']);
  }

  /**
   * `PATCH /sites/{site-id}/termStore`
   *
   * Update the properties of a store object.
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/termStore']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/termStore']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}/termStore', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
      'site-id': this.siteId,
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /sites/{site-id}/termStore']['response']);
  }
}
