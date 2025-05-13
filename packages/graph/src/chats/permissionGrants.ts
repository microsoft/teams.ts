import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './permissionGrants-types.ts';

/**
 * /chats/{chat-id}/permissionGrants
 * Provides operations to manage the permissionGrants property of the microsoft.graph.chat entity.
 */
export class PermissionGrantsClient {
  protected baseUrl = '/chats/{chat-id}/permissionGrants';
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
   * `DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
          res.data as Endpoints['DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `GET /chats/{chat-id}/permissionGrants`
   *
   * List all resource-specific permission grants on the chat. This list specifies the Microsoft Entra apps that have access to the chat, along with the corresponding resource-specific access that each app has.
   */
  async list(
    params?: Endpoints['GET /chats/{chat-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/permissionGrants',
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
      .then((res) => res.data as Endpoints['GET /chats/{chat-id}/permissionGrants']['response']);
  }

  /**
   * `GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps for the chat.
   */
  async get(
    params?: Endpoints['GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
          res.data as Endpoints['GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: Endpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
          res.data as Endpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
      );
  }

  /**
   * `POST /chats/{chat-id}/permissionGrants`
   *
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/permissionGrants']['body'],
    params?: Endpoints['POST /chats/{chat-id}/permissionGrants']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/permissionGrants',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /chats/{chat-id}/permissionGrants']['response']);
  }
}
