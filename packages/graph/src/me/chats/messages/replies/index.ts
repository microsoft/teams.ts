import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { HostedContentsClient } from './hostedContents';
import { SetReactionClient } from './setReaction';
import { SoftDeleteClient } from './softDelete';
import { UndoSoftDeleteClient } from './undoSoftDelete';
import { UnsetReactionClient } from './unsetReaction';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true, arrayFormat: 'comma' })}`;
}

/**
 * /me/chats/{chat-id}/messages/{chatMessage-id}/replies
 * Provides operations to manage the replies property of the microsoft.graph.chatMessage entity.
 */
export class RepliesClient {
  protected baseUrl = '/me/chats/{chat-id}/messages/{chatMessage-id}/replies';
  protected http: http.Client;

  constructor(
    protected readonly chatMessageId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
   */
  hostedContents(chatMessageId1: string) {
    return new HostedContentsClient(chatMessageId1, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
   *
   * Provides operations to call the setReaction method.
   */
  setReaction(chatMessageId1: string) {
    return new SetReactionClient(chatMessageId1, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
   *
   * Provides operations to call the softDelete method.
   */
  softDelete(chatMessageId1: string) {
    return new SoftDeleteClient(chatMessageId1, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
   *
   * Provides operations to call the undoSoftDelete method.
   */
  undoSoftDelete(chatMessageId1: string) {
    return new UndoSoftDeleteClient(chatMessageId1, this.http);
  }

  /**
   * `/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
   *
   * Provides operations to call the unsetReaction method.
   */
  unsetReaction(chatMessageId1: string) {
    return new UnsetReactionClient(chatMessageId1, this.http);
  }

  /**
   * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id': this.chatMessageId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies`
   *
   * Replies for a specified message. Supports $expand for channel messages.
   */
  async list(
    params?: Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
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
        { name: 'chatMessage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id': this.chatMessageId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
   *
   * Replies for a specified message. Supports $expand for channel messages.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id': this.chatMessageId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
      [
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id': this.chatMessageId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
      );
  }

  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
      [
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id': this.chatMessageId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
      );
  }
}
