import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddClient } from './add';
import { RemoveClient } from './remove';

/**
 * /teams/{team-id}/channels/{channel-id}/allMembers
 * Provides operations to manage the allMembers property of the microsoft.graph.channel entity.
 */
export class AllMembersClient {
  protected baseUrl = '/teams/{team-id}/channels/{channel-id}/allMembers';
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
   * `/teams/{team-id}/channels/{channel-id}/allMembers/add`
   *
   * Provides operations to call the add method.
   */
  get add() {
    return new AddClient(this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/allMembers/remove`
   *
   * Provides operations to call the remove method.
   */
  get remove() {
    return new RemoveClient(this.http);
  }

  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/allMembers`
   *
   * Get a list of all members in a channel. It supports all types of channels. In the case of shared channels, it includes all cross-tenant and cross-team members in a channel.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/allMembers',
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
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
   *
   * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'conversationMember-id', in: 'path' },
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
          res.data as Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/channels/{channel-id}/allMembers`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers']['body'],
    params?: Endpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/allMembers',
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
          res.data as Endpoints['POST /teams/{team-id}/channels/{channel-id}/allMembers']['response']
      );
  }
}
