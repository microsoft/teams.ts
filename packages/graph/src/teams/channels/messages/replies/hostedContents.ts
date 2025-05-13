import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './hostedContents-types.ts';

/**
 * /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents
 * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
 */
export class HostedContentsClient {
  protected baseUrl =
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents';
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
   * `DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
        { name: 'chatMessageHostedContent-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id1': this.chatMessageId1,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   * Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content.
   */
  async list(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
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
        { name: 'channel-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id1': this.chatMessageId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
        { name: 'chatMessageHostedContent-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id1': this.chatMessageId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
        { name: 'chatMessageHostedContent-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id1': this.chatMessageId1,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
      );
  }

  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['body'],
    params?: Endpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
      [
        { name: 'team-id', in: 'path' },
        { name: 'channel-id', in: 'path' },
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
          res.data as Endpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
      );
  }
}
