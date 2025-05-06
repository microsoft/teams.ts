import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ArchiveClient } from './archive';
import { CompleteMigrationClient } from './completeMigration';
import { FilesFolderClient } from './filesFolder';
import { MembersClient } from './members';
import { MessagesClient } from './messages';
import { ProvisionEmailClient } from './provisionEmail';
import { RemoveEmailClient } from './removeEmail';
import { SharedWithTeamsClient } from './sharedWithTeams';
import { TabsClient } from './tabs';
import { UnarchiveClient } from './unarchive';

/**
 * /teams/{team-id}/channels
 * Provides operations to manage the channels property of the microsoft.graph.team entity.
 */
export class ChannelsClient {
  protected baseUrl = '/teams/{team-id}/channels';
  protected http: http.Client;

  constructor(
    protected readonly teamId: string,
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
   * `/teams/{team-id}/channels/{channel-id}/archive`
   *
   * Provides operations to call the archive method.
   */
  archive(channelId: string) {
    return new ArchiveClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/completeMigration`
   *
   * Provides operations to call the completeMigration method.
   */
  completeMigration(channelId: string) {
    return new CompleteMigrationClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/filesFolder`
   *
   * Provides operations to manage the filesFolder property of the microsoft.graph.channel entity.
   */
  filesFolder(channelId: string) {
    return new FilesFolderClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/members`
   *
   * Provides operations to manage the members property of the microsoft.graph.channel entity.
   */
  members(channelId: string) {
    return new MembersClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/messages`
   *
   * Provides operations to manage the messages property of the microsoft.graph.channel entity.
   */
  messages(channelId: string) {
    return new MessagesClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/provisionEmail`
   *
   * Provides operations to call the provisionEmail method.
   */
  provisionEmail(channelId: string) {
    return new ProvisionEmailClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/removeEmail`
   *
   * Provides operations to call the removeEmail method.
   */
  removeEmail(channelId: string) {
    return new RemoveEmailClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/sharedWithTeams`
   *
   * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
   */
  sharedWithTeams(channelId: string) {
    return new SharedWithTeamsClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/tabs`
   *
   * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
   */
  tabs(channelId: string) {
    return new TabsClient(channelId, this.http);
  }

  /**
   * `/teams/{team-id}/channels/{channel-id}/unarchive`
   *
   * Provides operations to call the unarchive method.
   */
  unarchive(channelId: string) {
    return new UnarchiveClient(channelId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}`
   *
   * Delete the channel.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/channels/{channel-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /teams/{team-id}/channels/{channel-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels`
   *
   * Retrieve the list of channels in this team.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/channels']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels',
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
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/channels']['response']);
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}`
   *
   * Retrieve the properties and relationships of a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve channel information.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}`
   *
   * Update the properties of the specified channel.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /teams/{team-id}/channels/{channel-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/channels`
   *
   * Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel&#x27;s displayName is 50 characters. This is the name that appears to the user in Microsoft Teams. If you&#x27;re creating a private channel, you can add a maximum of 200 members.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/channels']['body'],
    params?: Endpoints['POST /teams/{team-id}/channels']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}/channels', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
      'team-id': this.teamId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams/{team-id}/channels']['response']);
  }
}
