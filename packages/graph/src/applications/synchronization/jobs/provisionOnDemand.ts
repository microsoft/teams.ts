import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './provisionOnDemand-types.ts';

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
 * /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand
 * Provides operations to call the provisionOnDemand method.
 */
export class ProvisionOnDemandClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand';
  protected http: http.Client;

  constructor(
    protected readonly synchronizationJobId: string,
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
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand`
   *
   * Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'synchronizationJob-id': this.synchronizationJobId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['response']
      );
  }
}
