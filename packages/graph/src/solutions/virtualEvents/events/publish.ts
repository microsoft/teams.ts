import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './publish-types.ts';

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
