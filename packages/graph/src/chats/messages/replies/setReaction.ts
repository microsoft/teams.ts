import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './setReaction-types.ts';

/**
 * /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction
 * Provides operations to call the setReaction method.
 */
export class SetReactionClient {
  protected baseUrl =
    '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction';
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
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
   *
   */
  async create(
    body: Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
    params?: Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
      [
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
          res.data as Endpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
      );
  }
}
