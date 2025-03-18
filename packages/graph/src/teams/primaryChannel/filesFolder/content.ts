import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './content-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true, arrayFormat: 'comma' })}`;
}

/**
 * /teams/{team-id}/primaryChannel/filesFolder/content
 * Provides operations to manage the media for the team entity.
 */
export class ContentClient {
  protected baseUrl = '/teams/{team-id}/primaryChannel/filesFolder/content';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `DELETE /teams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async delete(
    params?: Endpoints['DELETE /teams/{team-id}/primaryChannel/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/filesFolder/content',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teams/{team-id}/primaryChannel/filesFolder/content']['response']
      );
  }

  /**
   * `GET /teams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async get(
    params?: Endpoints['GET /teams/{team-id}/primaryChannel/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/filesFolder/content',
      [
        { name: '$format', in: 'query' },
        { name: 'team-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teams/{team-id}/primaryChannel/filesFolder/content']['response']
      );
  }

  /**
   * `PUT /teams/{team-id}/primaryChannel/filesFolder/content`
   *
   * The content stream, if the item represents a file.
   */
  async set(
    body: Endpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['body'],
    params?: Endpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teams/{team-id}/primaryChannel/filesFolder/content',
      [{ name: 'team-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /teams/{team-id}/primaryChannel/filesFolder/content']['response']
      );
  }
}
