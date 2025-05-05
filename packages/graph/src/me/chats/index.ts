import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { HideForUserClient } from './hideForUser';
import { InstalledAppsClient } from './installedApps';
import { LastMessagePreviewClient } from './lastMessagePreview';
import { MarkChatReadForUserClient } from './markChatReadForUser';
import { MarkChatUnreadForUserClient } from './markChatUnreadForUser';
import { MembersClient } from './members';
import { MessagesClient } from './messages';
import { PermissionGrantsClient } from './permissionGrants';
import { PinnedMessagesClient } from './pinnedMessages';
import { SendActivityNotificationClient } from './sendActivityNotification';
import { TabsClient } from './tabs';
import { UnhideForUserClient } from './unhideForUser';

/**
 * /me/chats
 * Provides operations to manage the chats property of the microsoft.graph.user entity.
 */
export class ChatsClient {
  protected baseUrl = '/me/chats';
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
   * `/me/chats/{chat-id}/hideForUser`
   *
   * Provides operations to call the hideForUser method.
   */
  hideForUser(chatId: string) {
    return new HideForUserClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/installedApps`
   *
   * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
   */
  installedApps(chatId: string) {
    return new InstalledAppsClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/lastMessagePreview`
   *
   * Provides operations to manage the lastMessagePreview property of the microsoft.graph.chat entity.
   */
  lastMessagePreview(chatId: string) {
    return new LastMessagePreviewClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/markChatReadForUser`
   *
   * Provides operations to call the markChatReadForUser method.
   */
  markChatReadForUser(chatId: string) {
    return new MarkChatReadForUserClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/markChatUnreadForUser`
   *
   * Provides operations to call the markChatUnreadForUser method.
   */
  markChatUnreadForUser(chatId: string) {
    return new MarkChatUnreadForUserClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/members`
   *
   * Provides operations to manage the members property of the microsoft.graph.chat entity.
   */
  members(chatId: string) {
    return new MembersClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages`
   *
   * Provides operations to manage the messages property of the microsoft.graph.chat entity.
   */
  messages(chatId: string) {
    return new MessagesClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/permissionGrants`
   *
   * Provides operations to manage the permissionGrants property of the microsoft.graph.chat entity.
   */
  permissionGrants(chatId: string) {
    return new PermissionGrantsClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/pinnedMessages`
   *
   * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
   */
  pinnedMessages(chatId: string) {
    return new PinnedMessagesClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/sendActivityNotification`
   *
   * Provides operations to call the sendActivityNotification method.
   */
  sendActivityNotification(chatId: string) {
    return new SendActivityNotificationClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/tabs`
   *
   * Provides operations to manage the tabs property of the microsoft.graph.chat entity.
   */
  tabs(chatId: string) {
    return new TabsClient(chatId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/unhideForUser`
   *
   * Provides operations to call the unhideForUser method.
   */
  unhideForUser(chatId: string) {
    return new UnhideForUserClient(chatId, this.http);
  }

  /**
   * `DELETE /me/chats/{chat-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /me/chats/{chat-id}']['response']);
  }

  /**
   * `GET /me/chats`
   *
   */
  async list(params?: Endpoints['GET /me/chats']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/me/chats',
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
      .then((res) => res.data as Endpoints['GET /me/chats']['response']);
  }

  /**
   * `GET /me/chats/{chat-id}`
   *
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /me/chats/{chat-id}']['response']);
  }

  /**
   * `PATCH /me/chats/{chat-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/chats/{chat-id}', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /me/chats/{chat-id}']['response']);
  }

  /**
   * `POST /me/chats`
   *
   */
  async create(
    body: Endpoints['POST /me/chats']['body'],
    params?: Endpoints['POST /me/chats']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/chats', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/chats']['response']);
  }
}
