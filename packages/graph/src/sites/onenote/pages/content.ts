import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

/**
 * /sites/{site-id}/onenote/pages/{onenotePage-id}/content
 * Provides operations to manage the media for the site entity.
 */
export class ContentClient {
  protected baseUrl = '/sites/{site-id}/onenote/pages/{onenotePage-id}/content';
  protected http: http.Client;

  constructor(
    protected readonly onenotePageId: string,
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
   * `GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
      [
        { name: 'site-id', in: 'path' },
        { name: 'onenotePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenotePage-id': this.onenotePageId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
      );
  }

  /**
   * `PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content`
   *
   * The page&#x27;s HTML content.
   */
  async set(
    body: Endpoints['PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['body'],
    params?: Endpoints['PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/pages/{onenotePage-id}/content',
      [
        { name: 'site-id', in: 'path' },
        { name: 'onenotePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenotePage-id': this.onenotePageId,
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /sites/{site-id}/onenote/pages/{onenotePage-id}/content']['response']
      );
  }
}
