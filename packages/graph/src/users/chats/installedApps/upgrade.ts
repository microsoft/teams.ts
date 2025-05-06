import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './upgrade-types.ts';

/**
 * /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade
 * Provides operations to call the upgrade method.
 */
export class UpgradeClient {
  protected baseUrl =
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade';
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
   * `POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: Endpoints['POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsAppInstallation-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsAppInstallation-id': this.teamsAppInstallationId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
      );
  }
}
