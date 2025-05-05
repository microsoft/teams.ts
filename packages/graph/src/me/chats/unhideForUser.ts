import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './unhideForUser-types.ts';

/**
 * /me/chats/{chat-id}/unhideForUser
 * Provides operations to call the unhideForUser method.
 */
export class UnhideForUserClient {
  protected baseUrl = '/me/chats/{chat-id}/unhideForUser';
  protected http: http.Client;

  constructor(
    protected readonly chatId: string,
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
   * `POST /me/chats/{chat-id}/unhideForUser`
   *
   * Unhide a chat for a user.
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/unhideForUser']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/unhideForUser']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/unhideForUser',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/chats/{chat-id}/unhideForUser']['response']);
  }
}
