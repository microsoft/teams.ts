import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './createdOnBehalfOf-types.ts';

/**
 * /applications/{application-id}/createdOnBehalfOf
 * Provides operations to manage the createdOnBehalfOf property of the microsoft.graph.application entity.
 */
export class CreatedOnBehalfOfClient {
  protected baseUrl = '/applications/{application-id}/createdOnBehalfOf';
  protected http: http.Client;

  constructor(
    protected readonly applicationId: string,
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
   * `GET /applications/{application-id}/createdOnBehalfOf`
   *
   * Supports $filter (/$count eq 0, /$count ne 0). Read-only.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/createdOnBehalfOf']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/createdOnBehalfOf',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/createdOnBehalfOf']['response']
      );
  }
}
