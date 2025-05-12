import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './drive-types.ts';

/**
 * /sites/{site-id}/lists/{list-id}/drive
 * Provides operations to manage the drive property of the microsoft.graph.list entity.
 */
export class DriveClient {
  protected baseUrl = '/sites/{site-id}/lists/{list-id}/drive';
  protected http: http.Client;

  constructor(
    protected readonly listId: string,
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
   * `GET /sites/{site-id}/lists/{list-id}/drive`
   *
   * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/lists/{list-id}/drive']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/lists/{list-id}/drive',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'list-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'list-id': this.listId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /sites/{site-id}/lists/{list-id}/drive']['response']
      );
  }
}
