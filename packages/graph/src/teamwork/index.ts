import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { DeletedChatsClient } from './deletedChats';
import { DeletedTeamsClient } from './deletedTeams';
import { SendActivityNotificationToRecipientsClient } from './sendActivityNotificationToRecipients';
import { TeamsAppSettingsClient } from './teamsAppSettings';
import { WorkforceIntegrationsClient } from './workforceIntegrations';

/**
 * /teamwork
 * Provides operations to manage the teamwork singleton.
 */
export class TeamworkClient {
  protected baseUrl = '/teamwork';
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
   * `/teamwork/deletedChats`
   *
   * Provides operations to manage the deletedChats property of the microsoft.graph.teamwork entity.
   */
  get deletedChats() {
    return new DeletedChatsClient(this.http);
  }

  /**
   * `/teamwork/deletedTeams`
   *
   * Provides operations to manage the deletedTeams property of the microsoft.graph.teamwork entity.
   */
  get deletedTeams() {
    return new DeletedTeamsClient(this.http);
  }

  /**
   * `/teamwork/sendActivityNotificationToRecipients`
   *
   * Provides operations to call the sendActivityNotificationToRecipients method.
   */
  get sendActivityNotificationToRecipients() {
    return new SendActivityNotificationToRecipientsClient(this.http);
  }

  /**
   * `/teamwork/teamsAppSettings`
   *
   * Provides operations to manage the teamsAppSettings property of the microsoft.graph.teamwork entity.
   */
  get teamsAppSettings() {
    return new TeamsAppSettingsClient(this.http);
  }

  /**
   * `/teamwork/workforceIntegrations`
   *
   * Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity.
   */
  get workforceIntegrations() {
    return new WorkforceIntegrationsClient(this.http);
  }

  /**
   * `GET /teamwork`
   *
   * Get the properties and relationships of a teamwork object, such as the region of the organization and whether Microsoft Teams is enabled.
   */
  async get(params?: Endpoints['GET /teamwork']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/teamwork',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teamwork']['response']);
  }

  /**
   * `PATCH /teamwork`
   *
   */
  async update(
    body: Endpoints['PATCH /teamwork']['body'],
    params?: Endpoints['PATCH /teamwork']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamwork', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /teamwork']['response']);
  }
}
