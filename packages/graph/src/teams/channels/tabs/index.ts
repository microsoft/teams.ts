import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamsAppClient } from './teamsApp';

/**
 * /teams/{team-id}/channels/{channel-id}/tabs
 * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
 */
export class TabsClient {
  protected baseUrl = '/teams/{team-id}/channels/{channel-id}/tabs';
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
   * `/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * Provides operations to manage the teamsApp property of the microsoft.graph.teamsTab entity.
   */
  teamsApp(teamsTabId: string) {
    return new TeamsAppClient(teamsTabId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
   *
   * Removes (unpins) a tab from the specified channel within a team.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'teamsTab-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/tabs`
   *
   * Retrieve the list of tabs in the specified channel within a team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/tabs',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
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
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/tabs']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
   *
   * Retrieve the properties and relationships of the specified tab in a channel within a team.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'teamsTab-id', in: 'path' },
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
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}`
   *
   * Update the properties of the specified tab.
This API can be used to configure the content of the tab.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'teamsTab-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/tabs/{teamsTab-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/channels/{channel-id}/tabs`
   *
   * Add (pin) a tab to the specified channel within a team. The app must be preinstalled in the team and have the configurableTabs property defined in the app manifest.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['body'],
    params?: Endpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/tabs',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'channel-id': this.channelId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teams/{team-id}/channels/{channel-id}/tabs']['response']
      );
  }
}
