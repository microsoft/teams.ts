import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { HostedContentsClient } from './hostedContents';
import { SetReactionClient } from './setReaction';
import { SoftDeleteClient } from './softDelete';
import { UndoSoftDeleteClient } from './undoSoftDelete';
import { UnsetReactionClient } from './unsetReaction';

/**
 * /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies
 * Provides operations to manage the replies property of the microsoft.graph.chatMessage entity.
 */
export class RepliesClient {
  protected baseUrl =
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies';
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
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
   */
  hostedContents(chatMessageId1: string) {
    return new HostedContentsClient(chatMessageId1, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
   *
   * Provides operations to call the setReaction method.
   */
  setReaction(chatMessageId1: string) {
    return new SetReactionClient(chatMessageId1, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
   *
   * Provides operations to call the softDelete method.
   */
  softDelete(chatMessageId1: string) {
    return new SoftDeleteClient(chatMessageId1, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
   *
   * Provides operations to call the undoSoftDelete method.
   */
  undoSoftDelete(chatMessageId1: string) {
    return new UndoSoftDeleteClient(chatMessageId1, this.http);
  }

  /**
   * `/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
   *
   * Provides operations to call the unsetReaction method.
   */
  unsetReaction(chatMessageId1: string) {
    return new UnsetReactionClient(chatMessageId1, this.http);
  }

  /**
   * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
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
          res.data as Endpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
      );
  }

  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies`
   *
   * Replies for a specified message. Supports $expand for channel messages.
   */
  async list(
    params?: Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
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
          res.data as Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['response']
      );
  }

  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
   *
   * Replies for a specified message. Supports $expand for channel messages.
   */
  async get(
    params?: Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
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
          res.data as Endpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
      );
  }

  /**
   * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
   *
   */
  async update(
    body: Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
    params?: Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
      [
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
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
          res.data as Endpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
      );
  }

  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies`
   *
   */
  async create(
    body: Endpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['body'],
    params?: Endpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
      [
        { name: 'deletedTeam-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
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
          res.data as Endpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['response']
      );
  }
}
