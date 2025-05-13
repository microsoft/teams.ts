import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

/**
 * /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content
 * Provides operations to manage the media for the teamwork entity.
 */
export class ContentClient {
  protected baseUrl =
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content';
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
   * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async delete(
    params?: Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'deletedTeam-id', in: 'path' },
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
          res.data as Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
      );
  }

  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async get(
    params?: Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
      [
        { name: '$format', in: 'query' },
        { name: 'deletedTeam-id', in: 'path' },
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
          res.data as Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
      );
  }

  /**
   * `PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async set(
    body: Endpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['body'],
    params?: Endpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
      [
        { name: 'deletedTeam-id', in: 'path' },
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
          res.data as Endpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
      );
  }
}
