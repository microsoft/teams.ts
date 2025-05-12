import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './createLink-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink
 * Provides operations to call the createLink method.
 */
export class CreateLinkClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink';
  protected http: http.Client;

  constructor(
    protected readonly listItemId: string,
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
   * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
        { name: 'listItem-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'listItem-id': this.listItemId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['response']
      );
  }
}
