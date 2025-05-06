import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './publish-types.ts';

/**
 * /solutions/virtualEvents/events/{virtualEvent-id}/publish
 * Provides operations to call the publish method.
 */
export class PublishClient {
  protected baseUrl = '/solutions/virtualEvents/events/{virtualEvent-id}/publish';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventId: string,
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
   * `POST /solutions/virtualEvents/events/{virtualEvent-id}/publish`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/publish',
      [{ name: 'virtualEvent-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/publish']['response']
      );
  }
}
