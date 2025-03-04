import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './unsetVerifiedPublisher-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
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

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /applications/{application-id}/unsetVerifiedPublisher
 * Provides operations to call the unsetVerifiedPublisher method.
 */
export class UnsetVerifiedPublisherClient {
  protected baseUrl = '/applications/{application-id}/unsetVerifiedPublisher';
  protected http: http.Client;

  constructor(
    protected readonly applicationId: string,
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
   * `POST /applications/{application-id}/unsetVerifiedPublisher`
   *
   * Unset the verifiedPublisher previously set on an application, removing all verified publisher properties. For more information, see Publisher verification.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['body'],
    params?: Endpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/unsetVerifiedPublisher',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/unsetVerifiedPublisher']['response']
      );
  }
}
