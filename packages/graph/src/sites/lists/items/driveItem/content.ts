import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content
 * Provides operations to manage the media for the site entity.
 */
export class ContentClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content';
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
   * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content',
      [
        { name: '$format', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['response']
      );
  }

  /**
   * `PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  async set(
    body: Endpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['body'],
    params?: Endpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content']['response']
      );
  }
}
