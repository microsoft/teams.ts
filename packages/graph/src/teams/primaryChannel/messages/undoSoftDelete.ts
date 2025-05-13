import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './undoSoftDelete-types.ts';

/**
 * /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete
 * Provides operations to call the undoSoftDelete method.
 */
export class UndoSoftDeleteClient {
  protected baseUrl = '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete';
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
   * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  async create(
    body: Endpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['body'],
    params?: Endpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
      [
        { name: 'team-id', in: 'path' },
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
          res.data as Endpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['response']
      );
  }
}
