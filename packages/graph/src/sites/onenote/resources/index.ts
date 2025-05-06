import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ContentClient } from './content';

/**
 * /sites/{site-id}/onenote/resources
 * Provides operations to manage the resources property of the microsoft.graph.onenote entity.
 */
export class ResourcesClient {
  protected baseUrl = '/sites/{site-id}/onenote/resources';
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
   * `/sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * Provides operations to manage the media for the site entity.
   */
  content(onenoteResourceId: string) {
    return new ContentClient(onenoteResourceId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'onenoteResource-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/resources`
   *
   * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/onenote/resources']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/resources',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/onenote/resources']['response']);
  }

  /**
   * `GET /sites/{site-id}/onenote/resources/{onenoteResource-id}`
   *
   * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'onenoteResource-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'onenoteResource-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/onenote/resources`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/resources']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/resources']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/resources',
      [{ name: 'site-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/onenote/resources']['response']);
  }
}
