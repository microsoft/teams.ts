import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './hostedContents-types.ts';

/**
 * /chats/{chat-id}/messages/{chatMessage-id}/hostedContents
 * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
 */
export class HostedContentsClient {
  protected baseUrl = '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents';
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
   * `DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
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
          res.data as Endpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content.
   */
  async list(
    params?: Endpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
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
          res.data as Endpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
      );
  }

  /**
   * `GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Retrieve the properties and relationships of chatMessageHostedContent object.
   */
  async get(
    params?: Endpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
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
          res.data as Endpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: Endpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
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
          res.data as Endpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['body'],
    params?: Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
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
          res.data as Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
      );
  }
}
