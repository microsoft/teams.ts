import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './photos-types.ts';

/**
 * /me/photos
 * Provides operations to manage the photos property of the microsoft.graph.user entity.
 */
export class PhotosClient {
  protected baseUrl = '/me/photos';
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
   * `GET /me/photos`
   *
   * The collection of the user&#x27;s profile photos in different sizes. Read-only.
   */
  async list(params?: Endpoints['GET /me/photos']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/me/photos',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/photos']['response']);
  }

  /**
   * `GET /me/photos/{profilePhoto-id}`
   *
   * The collection of the user&#x27;s profile photos in different sizes. Read-only.
   */
  async get(
    params?: Endpoints['GET /me/photos/{profilePhoto-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/photos/{profilePhoto-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'profilePhoto-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/photos/{profilePhoto-id}']['response']);
  }
}
