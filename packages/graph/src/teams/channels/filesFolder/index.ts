import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ContentClient } from './content';

/**
 * /teams/{team-id}/channels/{channel-id}/filesFolder
 * Provides operations to manage the filesFolder property of the microsoft.graph.channel entity.
 */
export class FilesFolderClient {
  protected baseUrl = '/teams/{team-id}/channels/{channel-id}/filesFolder';
  protected http: http.Client;

  constructor(
    protected readonly channelId: string,
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
   * `/teams/{team-id}/channels/{channel-id}/filesFolder/content`
   *
   * Provides operations to manage the media for the team entity.
   */
  get content() {
    return new ContentClient(this.http);
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/filesFolder`
   *
   * Get the metadata for the location where the files of a channel are stored.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/filesFolder',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder']['response']
      );
  }
}
