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
 * /chats
 * Provides operations to manage the collection of chat entities.
 */
export class ChatsClient {
  protected baseUrl = '/chats';
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
   * `/chats/{chat-id}/hideForUser`
   *
   * Provides operations to call the hideForUser method.
   */
  hideForUser(chatId: string) {
    return new HideForUserClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/installedApps`
   *
   * Provides operations to manage the installedApps property of the microsoft.graph.chat entity.
   */
  installedApps(chatId: string) {
    return new InstalledAppsClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/lastMessagePreview`
   *
   * Provides operations to manage the lastMessagePreview property of the microsoft.graph.chat entity.
   */
  lastMessagePreview(chatId: string) {
    return new LastMessagePreviewClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/markChatReadForUser`
   *
   * Provides operations to call the markChatReadForUser method.
   */
  markChatReadForUser(chatId: string) {
    return new MarkChatReadForUserClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/markChatUnreadForUser`
   *
   * Provides operations to call the markChatUnreadForUser method.
   */
  markChatUnreadForUser(chatId: string) {
    return new MarkChatUnreadForUserClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/members`
   *
   * Provides operations to manage the members property of the microsoft.graph.chat entity.
   */
  members(chatId: string) {
    return new MembersClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/messages`
   *
   * Provides operations to manage the messages property of the microsoft.graph.chat entity.
   */
  messages(chatId: string) {
    return new MessagesClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/permissionGrants`
   *
   * Provides operations to manage the permissionGrants property of the microsoft.graph.chat entity.
   */
  permissionGrants(chatId: string) {
    return new PermissionGrantsClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/pinnedMessages`
   *
   * Provides operations to manage the pinnedMessages property of the microsoft.graph.chat entity.
   */
  pinnedMessages(chatId: string) {
    return new PinnedMessagesClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/sendActivityNotification`
   *
   * Provides operations to call the sendActivityNotification method.
   */
  sendActivityNotification(chatId: string) {
    return new SendActivityNotificationClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/tabs`
   *
   * Provides operations to manage the tabs property of the microsoft.graph.chat entity.
   */
  tabs(chatId: string) {
    return new TabsClient(chatId, this.http);
  }

  /**
   * `/chats/{chat-id}/unhideForUser`
   *
   * Provides operations to call the unhideForUser method.
   */
  unhideForUser(chatId: string) {
    return new UnhideForUserClient(chatId, this.http);
  }

  /**
   * `DELETE /chats/{chat-id}`
   *
   * Soft-delete a chat. When invoked with delegated permissions, this operation only works for tenant admins and Teams service admins.
   */
  async delete(
    params?: Endpoints['DELETE /chats/{chat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}',
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
      .then((res) => res.data as Endpoints['DELETE /chats/{chat-id}']['response']);
  }

  /**
   * `GET /chats`
   *
   * Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.
   */
  async list(params?: Endpoints['GET /chats']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/chats',
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
      .then((res) => res.data as Endpoints['GET /chats']['response']);
  }

  /**
   * `GET /chats/{chat-id}`
   *
   * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
   */
  async get(params?: Endpoints['GET /chats/{chat-id}']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/chats/{chat-id}',
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
      .then((res) => res.data as Endpoints['GET /chats/{chat-id}']['response']);
  }

  /**
   * `PATCH /chats/{chat-id}`
   *
   * Update the properties of a chat object.
   */
  async update(
    body: Endpoints['PATCH /chats/{chat-id}']['body'],
    params?: Endpoints['PATCH /chats/{chat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/chats/{chat-id}', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /chats/{chat-id}']['response']);
  }

  /**
   * `POST /chats`
   *
   * Create a new chat object.
   */
  async create(
    body: Endpoints['POST /chats']['body'],
    params?: Endpoints['POST /chats']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/chats', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /chats']['response']);
  }
}
