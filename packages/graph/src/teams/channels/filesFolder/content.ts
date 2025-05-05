import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

/**
 * /teams/{team-id}/channels/{channel-id}/filesFolder/content
 * Provides operations to manage the media for the team entity.
 */
export class ContentClient {
  protected baseUrl = '/teams/{team-id}/channels/{channel-id}/filesFolder/content';
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
   * `DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
      [
        { name: '$format', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
      );
  }

  /**
   * `PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async set(
    body: Endpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['body'],
    params?: Endpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/filesFolder/content',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /teams/{team-id}/channels/{channel-id}/filesFolder/content']['response']
      );
  }
}
