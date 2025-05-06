import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './toTerm-types.ts';

/**
 * /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm
 * Provides operations to manage the toTerm property of the microsoft.graph.termStore.relation entity.
 */
export class ToTermClient {
  protected baseUrl =
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm';
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
   * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm`
   *
   * The to [term] of the relation. The term to which the relationship is defined.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'group-id', in: 'path' },
        { name: 'set-id', in: 'path' },
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
          res.data as Endpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/relations/{relation-id}/toTerm']['response']
      );
  }
}
