import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './validateCredentials-types.ts';

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
 * /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials
 * Provides operations to call the validateCredentials method.
 */
export class ValidateCredentialsClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials';
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
   * `POST /applications/{application-id}/synchronization/jobs/validateCredentials`
   *
   */
  async create$1(
    body: Endpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/validateCredentials',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
        'synchronizationJob-id': this.synchronizationJobId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/jobs/validateCredentials']['response']
      );
  }

  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials`
   *
   * Validate that the credentials are valid in the tenant.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
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
          res.data as Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['response']
      );
  }
}
