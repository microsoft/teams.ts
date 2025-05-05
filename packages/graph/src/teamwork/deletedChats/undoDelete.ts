import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './undoDelete-types.ts';

/**
 * /teamwork/deletedChats/{deletedChat-id}/undoDelete
 * Provides operations to call the undoDelete method.
 */
export class UndoDeleteClient {
  protected baseUrl = '/teamwork/deletedChats/{deletedChat-id}/undoDelete';
  protected http: http.Client;

  constructor(
    protected readonly deletedChatId: string,
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
   * `POST /teamwork/deletedChats/{deletedChat-id}/undoDelete`
   *
   * Restore a  deletedChat to an active chat.
   */
  async create(
    body: Endpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['body'],
    params?: Endpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedChats/{deletedChat-id}/undoDelete',
      [{ name: 'deletedChat-id', in: 'path' }],
      {
        ...(params || {}),
        'deletedChat-id': this.deletedChatId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /teamwork/deletedChats/{deletedChat-id}/undoDelete']['response']
      );
  }
}
