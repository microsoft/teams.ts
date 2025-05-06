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
 * /teams/{team-id}/primaryChannel
 * Provides operations to manage the primaryChannel property of the microsoft.graph.team entity.
 */
export class PrimaryChannelClient {
  protected baseUrl = '/teams/{team-id}/primaryChannel';
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
   * `/teams/{team-id}/primaryChannel/archive`
   *
   * Provides operations to call the archive method.
   */
  get archive() {
    return new ArchiveClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/completeMigration`
   *
   * Provides operations to call the completeMigration method.
   */
  get completeMigration() {
    return new CompleteMigrationClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/filesFolder`
   *
   * Provides operations to manage the filesFolder property of the microsoft.graph.channel entity.
   */
  get filesFolder() {
    return new FilesFolderClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/members`
   *
   * Provides operations to manage the members property of the microsoft.graph.channel entity.
   */
  get members() {
    return new MembersClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/messages`
   *
   * Provides operations to manage the messages property of the microsoft.graph.channel entity.
   */
  get messages() {
    return new MessagesClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/provisionEmail`
   *
   * Provides operations to call the provisionEmail method.
   */
  get provisionEmail() {
    return new ProvisionEmailClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/removeEmail`
   *
   * Provides operations to call the removeEmail method.
   */
  get removeEmail() {
    return new RemoveEmailClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/sharedWithTeams`
   *
   * Provides operations to manage the sharedWithTeams property of the microsoft.graph.channel entity.
   */
  get sharedWithTeams() {
    return new SharedWithTeamsClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/tabs`
   *
   * Provides operations to manage the tabs property of the microsoft.graph.channel entity.
   */
  get tabs() {
    return new TabsClient(this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/unarchive`
   *
   * Provides operations to call the unarchive method.
   */
  get unarchive() {
    return new UnarchiveClient(this.http);
  }

  /**
   * `DELETE /teams/{team-id}/primaryChannel`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/primaryChannel']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /teams/{team-id}/primaryChannel']['response']);
  }

  /**
   * `GET /teams/{team-id}/primaryChannel`
   *
   * Get the default channel, General, of a team.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel',
      [
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
      .then((res) => res.data as Endpoints['GET /teams/{team-id}/primaryChannel']['response']);
  }

  /**
   * `PATCH /teams/{team-id}/primaryChannel`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/primaryChannel']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/primaryChannel']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
        'team-id': this.teamId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /teams/{team-id}/primaryChannel']['response']);
  }
}
