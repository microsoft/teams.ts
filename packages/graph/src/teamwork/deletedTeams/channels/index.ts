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
 * /teamwork/deletedTeams/{deletedTeam-id}/channels
 * Provides operations to manage the channels property of the microsoft.graph.deletedTeam entity.
 */
export class ChannelsClient {
  protected baseUrl = '/teamwork/deletedTeams/{deletedTeam-id}/channels';
  protected http: http.Client;

  constructor(
    protected readonly deletedTeamId: string,
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
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/archive`
   *
   * Provides operations to call the archive method.
   */
  archive(channelId: string) {
    return new ArchiveClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration`
   *
   * Provides operations to call the completeMigration method.
   */
  completeMigration(channelId: string) {
    return new CompleteMigrationClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder`
   *
   * Provides operations to manage the filesFolder property of the microsoft.graph.channel entity.
   */
  filesFolder(channelId: string) {
    return new FilesFolderClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members`
   *
   * Provides operations to manage the members property of the microsoft.graph.channel entity.
   */
  members(channelId: string) {
    return new MembersClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages`
   *
   * Provides operations to manage the messages property of the microsoft.graph.channel entity.
   */
  messages(channelId: string) {
    return new MessagesClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/provisionEmail`
   *
   * Provides operations to call the provisionEmail method.
   */
  provisionEmail(channelId: string) {
    return new ProvisionEmailClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/removeEmail`
   *
   * Provides operations to call the removeEmail method.
   */
  removeEmail(channelId: string) {
    return new RemoveEmailClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams`
   *
   * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
   */
  sharedWithTeams(channelId: string) {
    return new SharedWithTeamsClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs`
   *
   * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
   */
  tabs(channelId: string) {
    return new TabsClient(channelId, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/unarchive`
   *
   * Provides operations to call the unarchive method.
   */
  unarchive(channelId: string) {
    return new UnarchiveClient(channelId, this.http);
  }

  /**
   * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'deletedTeam-id': this.deletedTeamId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
      );
  }

  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels`
   *
   * The channels that are either shared with this deleted team or created in this deleted team.
   */
  async list(
    params?: Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'deletedTeam-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'deletedTeam-id': this.deletedTeamId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels']['response']
      );
  }

  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
   *
   * The channels that are either shared with this deleted team or created in this deleted team.
   */
  async get(
    params?: Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'deletedTeam-id': this.deletedTeamId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
      );
  }

  /**
   * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['body'],
    params?: Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
      [
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'deletedTeam-id': this.deletedTeamId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
      );
  }

  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels`
   *
   */
  async create(
    body: Endpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['body'],
    params?: Endpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels',
      [{ name: 'deletedTeam-id', in: 'path' }],
      {
        ...(params || {}),
        'deletedTeam-id': this.deletedTeamId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['response']
      );
  }
}
