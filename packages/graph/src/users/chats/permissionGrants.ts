import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './permissionGrants-types.ts';

/**
 * /users/{user-id}/chats/{chat-id}/permissionGrants
 * Provides operations to manage the permissionGrants property of the microsoft.graph.chat entity.
 */
export class PermissionGrantsClient {
  protected baseUrl = '/users/{user-id}/chats/{chat-id}/permissionGrants';
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
   * `DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/permissionGrants`
   *
   * A collection of permissions granted to apps for the chat.
   */
  async list(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/permissionGrants',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants']['response']
      );
  }

  /**
   * `GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps for the chat.
   */
  async get(
    params?: Endpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: Endpoints['PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `POST /users/{user-id}/chats/{chat-id}/permissionGrants`
   *
   */
  async create(
    body: Endpoints['POST /users/{user-id}/chats/{chat-id}/permissionGrants']['body'],
    params?: Endpoints['POST /users/{user-id}/chats/{chat-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/permissionGrants',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/chats/{chat-id}/permissionGrants']['response']
      );
  }
}
