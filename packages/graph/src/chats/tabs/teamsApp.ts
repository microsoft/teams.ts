import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './teamsApp-types.ts';

/**
 * /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp
 * Provides operations to manage the teamsApp property of the microsoft.graph.teamsTab entity.
 */
export class TeamsAppClient {
  protected baseUrl = '/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp';
  protected http: http.Client;

  constructor(
    protected readonly teamsTabId: string,
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
   * `GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
   */
  async get(
    params?: Endpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'chat-id', in: 'path' },
        { name: 'teamsTab-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'teamsTab-id': this.teamsTabId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['response']
      );
  }
}
