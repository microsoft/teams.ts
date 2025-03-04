import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './softDelete-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
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

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete
 * Provides operations to call the softDelete method.
 */
export class SoftDeleteClient {
  protected baseUrl =
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete';
  protected http: http.Client;

  constructor(
    protected readonly chatMessageId1: string,
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
   * `POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  async create(
    body: Endpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['body'],
    params?: Endpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
      [
        { name: 'user-id', in: 'path' },
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id1': this.chatMessageId1,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['response']
      );
  }
}
