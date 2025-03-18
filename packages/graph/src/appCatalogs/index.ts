import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { TeamsAppsClient } from './teamsApps';

interface Param {
  readonly in: string;
  readonly name: string;
  readonly explode?: boolean;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      const arrayFormat = param.explode == null || param.explode ? 'repeat' : 'comma'; // Assuming params are in form style
      query[param.name] = qs.stringify(data[param.name], { arrayFormat });
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /appCatalogs
 * Provides operations to manage the appCatalogs singleton.
 */
export class AppCatalogsClient {
  protected baseUrl = '/appCatalogs';
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
   * `/appCatalogs/teamsApps`
   *
   * Provides operations to manage the teamsApps property of the microsoft.graph.appCatalogs entity.
   */
  get teamsApps() {
    return new TeamsAppsClient(this.http);
  }

  /**
   * `GET /appCatalogs`
   *
   */
  async list(params?: Endpoints['GET /appCatalogs']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/appCatalogs',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /appCatalogs']['response']);
  }

  /**
   * `PATCH /appCatalogs`
   *
   */
  async update(
    body: Endpoints['PATCH /appCatalogs']['body'],
    params?: Endpoints['PATCH /appCatalogs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/appCatalogs', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /appCatalogs']['response']);
  }
}
