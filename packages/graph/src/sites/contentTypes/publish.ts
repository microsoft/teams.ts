import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './publish-types.ts';

/**
 * /sites/{site-id}/contentTypes/{contentType-id}/publish
 * Provides operations to call the publish method.
 */
export class PublishClient {
  protected baseUrl = '/sites/{site-id}/contentTypes/{contentType-id}/publish';
  protected http: http.Client;

  constructor(
    protected readonly contentTypeId: string,
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
   * `POST /sites/{site-id}/contentTypes/{contentType-id}/publish`
   *
   * Publishes a contentType present in the content type hub site.
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/publish']['body'],
    params?: Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/publish']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/contentTypes/{contentType-id}/publish',
      [
        { name: 'site-id', in: 'path' },
        { name: 'contentType-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'contentType-id': this.contentTypeId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/publish']['response']
      );
  }
}
