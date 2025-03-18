import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './lastMessagePreview-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      const arrayFormat = param.explode == null || param.explode ? 'repeat' : 'comma'; // Assuming params are in form style
      query[param.name] = qs.stringify(data[param.name], { arrayFormat });
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /me/chats/{chat-id}/lastMessagePreview
 * Provides operations to manage the lastMessagePreview property of the microsoft.graph.chat entity.
 */
export class LastMessagePreviewClient {
  protected baseUrl = '/me/chats/{chat-id}/lastMessagePreview';
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
   * `DELETE /me/chats/{chat-id}/lastMessagePreview`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/chats/{chat-id}/lastMessagePreview']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/lastMessagePreview',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'chat-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /me/chats/{chat-id}/lastMessagePreview']['response']
      );
  }

  /**
   * `GET /me/chats/{chat-id}/lastMessagePreview`
   *
   * Preview of the last message sent in the chat. Null if no messages were sent in the chat. Currently, only the list chats operation supports this property.
   */
  async get(
    params?: Endpoints['GET /me/chats/{chat-id}/lastMessagePreview']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/lastMessagePreview',
      [
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
      .then(
        (res) => res.data as Endpoints['GET /me/chats/{chat-id}/lastMessagePreview']['response']
      );
  }

  /**
   * `PATCH /me/chats/{chat-id}/lastMessagePreview`
   *
   */
  async update(
    body: Endpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['body'],
    params?: Endpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/lastMessagePreview',
      [{ name: 'chat-id', in: 'path' }],
      {
        ...(params || {}),
        'chat-id': this.chatId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['response']
      );
  }
}
