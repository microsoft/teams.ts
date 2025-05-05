import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './logo-types.ts';

/**
 * /applications/{application-id}/logo
 * Provides operations to manage the media for the application entity.
 */
export class LogoClient {
  protected baseUrl = '/applications/{application-id}/logo';
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
   * `DELETE /applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/logo']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/logo',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /applications/{application-id}/logo']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/logo']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/logo',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /applications/{application-id}/logo']['response']);
  }

  /**
   * `PUT /applications/{application-id}/logo`
   *
   * The main logo for the application. Not nullable.
   */
  async set(
    body: Endpoints['PUT /applications/{application-id}/logo']['body'],
    params?: Endpoints['PUT /applications/{application-id}/logo']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/logo',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .put(url, body, config)
      .then((res) => res.data as Endpoints['PUT /applications/{application-id}/logo']['response']);
  }
}
