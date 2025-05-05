import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './teamsApp-types.ts';

/**
 * /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp
 * Provides operations to manage the teamsApp property of the microsoft.graph.teamsAppInstallation entity.
 */
export class TeamsAppClient {
  protected baseUrl = '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp';
  protected http: http.Client;

  constructor(
    protected readonly teamsAppInstallationId: string,
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
   * `GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  async get(
    params?: Endpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsAppInstallation-id': this.teamsAppInstallationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
      );
  }
}
