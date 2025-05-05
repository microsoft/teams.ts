import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './permissionGrants-types.ts';

/**
 * /me/chats/{chat-id}/permissionGrants
 * Provides operations to manage the permissionGrants property of the microsoft.graph.chat entity.
 */
export class PermissionGrantsClient {
  protected baseUrl = '/me/chats/{chat-id}/permissionGrants';
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
   * `DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: 'If-Match', in: 'header' },
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
          res.data as Endpoints['DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/permissionGrants`
   *
   * A collection of permissions granted to apps for the chat.
   */
  async list(
    params?: Endpoints['GET /me/chats/{chat-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/permissionGrants',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/chats/{chat-id}/permissionGrants']['response']);
  }

  /**
   * `GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps for the chat.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
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
          res.data as Endpoints['GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      [
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
          res.data as Endpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `POST /me/chats/{chat-id}/permissionGrants`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/permissionGrants']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/permissionGrants',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /me/chats/{chat-id}/permissionGrants']['response']
      );
  }
}
