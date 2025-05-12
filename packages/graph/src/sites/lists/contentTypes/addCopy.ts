import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './addCopy-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/contentTypes/addCopy
 * Provides operations to call the addCopy method.
 */
export class AddCopyClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/contentTypes/addCopy';
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
   * `POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy`
   *
   * Add a copy of a content type from a site to a list.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['body'],
    params?: Endpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/contentTypes/addCopy',
      [
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['response']
      );
  }
}
