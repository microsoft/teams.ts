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
 * /teams/{team-id}/primaryChannel/messages
 * Provides operations to manage the messages property of the microsoft.graph.channel entity.
 */
export class MessagesClient {
  protected baseUrl = '/teams/{team-id}/primaryChannel/messages';
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
   * `/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents`
   *
   * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
   */
  hostedContents(chatMessageId: string) {
    return new HostedContentsClient(chatMessageId, this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies`
   *
   * Provides operations to manage the replies property of the microsoft.graph.chatMessage entity.
   */
  replies(chatMessageId: string) {
    return new RepliesClient(chatMessageId, this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction`
   *
   * Provides operations to call the setReaction method.
   */
  setReaction(chatMessageId: string) {
    return new SetReactionClient(chatMessageId, this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/softDelete`
   *
   * Provides operations to call the softDelete method.
   */
  softDelete(chatMessageId: string) {
    return new SoftDeleteClient(chatMessageId, this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Provides operations to call the undoSoftDelete method.
   */
  undoSoftDelete(chatMessageId: string) {
    return new UndoSoftDeleteClient(chatMessageId, this.http);
  }

  /**
   * `/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction`
   *
   * Provides operations to call the unsetReaction method.
   */
  unsetReaction(chatMessageId: string) {
    return new UnsetReactionClient(chatMessageId, this.http);
  }

  /**
   * `DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/primaryChannel/messages`
   *
   * A collection of all the messages in the channel. A navigation property. Nullable.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel/messages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/messages',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /teams/{team-id}/primaryChannel/messages']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
   *
   * A collection of all the messages in the channel. A navigation property. Nullable.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/primaryChannel/messages`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/primaryChannel/messages']['body'],
    params?: Endpoints['POST /teams/{team-id}/primaryChannel/messages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/messages',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /teams/{team-id}/primaryChannel/messages']['response']
      );
  }
}
