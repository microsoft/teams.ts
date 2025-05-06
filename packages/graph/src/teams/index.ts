import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AllChannelsClient } from './allChannels';
import { ArchiveClient } from './archive';
import { ChannelsClient } from './channels';
import { CloneClient } from './clone';
import { CompleteMigrationClient } from './completeMigration';
import { GroupClient } from './group';
import { IncomingChannelsClient } from './incomingChannels';
import { InstalledAppsClient } from './installedApps';
import { MembersClient } from './members';
import { OperationsClient } from './operations';
import { PermissionGrantsClient } from './permissionGrants';
import { PhotoClient } from './photo';
import { PrimaryChannelClient } from './primaryChannel';
import { ScheduleClient } from './schedule';
import { SendActivityNotificationClient } from './sendActivityNotification';
import { TagsClient } from './tags';
import { TemplateClient } from './template';
import { UnarchiveClient } from './unarchive';

/**
 * /teams
 * Provides operations to manage the collection of team entities.
 */
export class TeamsClient {
  protected baseUrl = '/teams';
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
   * `/teams/{team-id}/allChannels`
   *
   * Provides operations to manage the allChannels property of the microsoft.graph.team entity.
   */
  allChannels(teamId: string) {
    return new AllChannelsClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/archive`
   *
   * Provides operations to call the archive method.
   */
  archive(teamId: string) {
    return new ArchiveClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/channels`
   *
   * Provides operations to manage the channels property of the microsoft.graph.team entity.
   */
  channels(teamId: string) {
    return new ChannelsClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/clone`
   *
   * Provides operations to call the clone method.
   */
  clone(teamId: string) {
    return new CloneClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/completeMigration`
   *
   * Provides operations to call the completeMigration method.
   */
  completeMigration(teamId: string) {
    return new CompleteMigrationClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/group`
   *
   * Provides operations to manage the group property of the microsoft.graph.team entity.
   */
  group(teamId: string) {
    return new GroupClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/incomingChannels`
   *
   * Provides operations to manage the incomingChannels property of the microsoft.graph.team entity.
   */
  incomingChannels(teamId: string) {
    return new IncomingChannelsClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/installedApps`
   *
   * Provides operations to manage the installedApps property of the microsoft.graph.team entity.
   */
  installedApps(teamId: string) {
    return new InstalledAppsClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/members`
   *
   * Provides operations to manage the members property of the microsoft.graph.team entity.
   */
  members(teamId: string) {
    return new MembersClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/operations`
   *
   * Provides operations to manage the operations property of the microsoft.graph.team entity.
   */
  operations(teamId: string) {
    return new OperationsClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/permissionGrants`
   *
   * Provides operations to manage the permissionGrants property of the microsoft.graph.team entity.
   */
  permissionGrants(teamId: string) {
    return new PermissionGrantsClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/photo`
   *
   * Provides operations to manage the photo property of the microsoft.graph.team entity.
   */
  photo(teamId: string) {
    return new PhotoClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel`
   *
   * Provides operations to manage the primaryChannel property of the microsoft.graph.team entity.
   */
  primaryChannel(teamId: string) {
    return new PrimaryChannelClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/schedule`
   *
   * Provides operations to manage the schedule property of the microsoft.graph.team entity.
   */
  schedule(teamId: string) {
    return new ScheduleClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/sendActivityNotification`
   *
   * Provides operations to call the sendActivityNotification method.
   */
  sendActivityNotification(teamId: string) {
    return new SendActivityNotificationClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/tags`
   *
   * Provides operations to manage the tags property of the microsoft.graph.team entity.
   */
  tags(teamId: string) {
    return new TagsClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/template`
   *
   * Provides operations to manage the template property of the microsoft.graph.team entity.
   */
  template(teamId: string) {
    return new TemplateClient(teamId, this.http);
  }

  /**
   * `/teams/{team-id}/unarchive`
   *
   * Provides operations to call the unarchive method.
   */
  unarchive(teamId: string) {
    return new UnarchiveClient(teamId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /teams/{team-id}']['response']);
  }

  /**
   * `GET /teams`
   *
   * List all teams in an organization.
   */
  async list(params?: Endpoints['GET /teams']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/teams',
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
      .then((res) => res.data as Endpoints['GET /teams']['response']);
  }

  /**
   * `GET /teams/{team-id}`
   *
   * Retrieve the properties and relationships of the specified team.
   */
  async get(params?: Endpoints['GET /teams/{team-id}']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/teams/{team-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teams/{team-id}']['response']);
  }

  /**
   * `PATCH /teams/{team-id}`
   *
   * Update the properties of the specified team.
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams/{team-id}', [{ name: 'team-id', in: 'path' }], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /teams/{team-id}']['response']);
  }

  /**
   * `POST /teams`
   *
   * Create a new team.
   */
  async create(
    body: Endpoints['POST /teams']['body'],
    params?: Endpoints['POST /teams']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teams', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teams']['response']);
  }
}
