import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './hostedContents-types.ts';

/**
 * /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents
 * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
 */
export class HostedContentsClient {
  protected baseUrl = '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents';
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
   * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessageHostedContent-id', in: 'path' },
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
          res.data as Endpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  async list(
    params?: Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
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
          res.data as Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessageHostedContent-id', in: 'path' },
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
          res.data as Endpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      [
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessageHostedContent-id', in: 'path' },
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
          res.data as Endpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
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
          res.data as Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
      );
  }
}
