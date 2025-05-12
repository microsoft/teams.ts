import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './fromTerm-types.ts';

/**
 * /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/fromTerm
 * Provides operations to manage the fromTerm property of the microsoft.graph.termStore.relation entity.
 */
export class FromTermClient {
  protected baseUrl =
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/fromTerm';
  protected http: http.Client;

  constructor(
    protected readonly relationId: string,
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
   * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/fromTerm`
   *
   * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/fromTerm']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/fromTerm',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'store-id', in: 'path' },
        { name: 'set-id', in: 'path' },
        { name: 'set-id1', in: 'path' },
        { name: 'term-id', in: 'path' },
        { name: 'relation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'relation-id': this.relationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}/terms/{term-id}/relations/{relation-id}/fromTerm']['response']
      );
  }
}
