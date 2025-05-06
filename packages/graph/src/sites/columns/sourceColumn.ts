import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './sourceColumn-types.ts';

/**
 * /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn
 * Provides operations to manage the sourceColumn property of the microsoft.graph.columnDefinition entity.
 */
export class SourceColumnClient {
  protected baseUrl = '/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn';
  protected http: http.Client;

  constructor(
    protected readonly columnDefinitionId: string,
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
   * `GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn`
   *
   * The source column for the content type column.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/columns/{columnDefinition-id}/sourceColumn',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'columnDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'columnDefinition-id': this.columnDefinitionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/columns/{columnDefinition-id}/sourceColumn']['response']
      );
  }
}
