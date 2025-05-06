import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './add-types.ts';

/**
 * /chats/{chat-id}/members/add
 * Provides operations to call the add method.
 */
export class AddClient {
  protected baseUrl = '/chats/{chat-id}/members/add';
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
   * `POST /chats/{chat-id}/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/members/add']['body'],
    params?: Endpoints['POST /chats/{chat-id}/members/add']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/chats/{chat-id}/members/add', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /chats/{chat-id}/members/add']['response']);
  }
}
