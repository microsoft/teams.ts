import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { HostedContentsClient } from './hostedContents';
import { RepliesClient } from './replies';
import { SetReactionClient } from './setReaction';
import { SoftDeleteClient } from './softDelete';
import { UndoSoftDeleteClient } from './undoSoftDelete';
import { UnsetReactionClient } from './unsetReaction';

/**
 * /me/chats/{chat-id}/messages
 * Provides operations to manage the messages property of the microsoft.graph.chat entity.
 */
export class MessagesClient {
  protected baseUrl = '/me/chats/{chat-id}/messages';
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
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
   */
  hostedContents(chatMessageId: string) {
    return new HostedContentsClient(chatMessageId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/replies`
   *
   * Provides operations to manage the replies property of the microsoft.graph.chatMessage entity.
   */
  replies(chatMessageId: string) {
    return new RepliesClient(chatMessageId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/setReaction`
   *
   * Provides operations to call the setReaction method.
   */
  setReaction(chatMessageId: string) {
    return new SetReactionClient(chatMessageId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/softDelete`
   *
   * Provides operations to call the softDelete method.
   */
  softDelete(chatMessageId: string) {
    return new SoftDeleteClient(chatMessageId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Provides operations to call the undoSoftDelete method.
   */
  undoSoftDelete(chatMessageId: string) {
    return new UndoSoftDeleteClient(chatMessageId, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction`
   *
   * Provides operations to call the unsetReaction method.
   */
  unsetReaction(chatMessageId: string) {
    return new UnsetReactionClient(chatMessageId, this.http);
  }

  /**
   * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
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
          res.data as Endpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/messages`
   *
   * A collection of all the messages in the chat. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/chats/{chat-id}/messages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages',
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
      .then((res) => res.data as Endpoints['GET /me/chats/{chat-id}/messages']['response']);
  }

  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}`
   *
   * A collection of all the messages in the chat. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
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
          res.data as Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}',
      [
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
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
          res.data as Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['response']
      );
  }

  /**
   * `POST /me/chats/{chat-id}/messages`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/messages']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/messages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/me/chats/{chat-id}/messages', [{ name: 'chat-id', in: 'path' }], {
      ...(params || {}),
      'chat-id': this.chatId,
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /me/chats/{chat-id}/messages']['response']);
  }
}
