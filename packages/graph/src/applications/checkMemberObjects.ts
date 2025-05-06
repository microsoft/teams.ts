import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './checkMemberObjects-types.ts';

/**
 * /applications/{application-id}/checkMemberObjects
 * Provides operations to call the checkMemberObjects method.
 */
export class CheckMemberObjectsClient {
  protected baseUrl = '/applications/{application-id}/checkMemberObjects';
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
   * `POST /applications/{application-id}/checkMemberObjects`
   *
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/checkMemberObjects']['body'],
    params?: Endpoints['POST /applications/{application-id}/checkMemberObjects']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/checkMemberObjects',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/checkMemberObjects']['response']
      );
  }
}
