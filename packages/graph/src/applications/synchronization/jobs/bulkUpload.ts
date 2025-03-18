import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './bulkUpload-types.ts';

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
 * /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload
 * Provides operations to manage the bulkUpload property of the microsoft.graph.synchronizationJob entity.
 */
export class BulkUploadClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload';
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
   * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'synchronizationJob-id': this.synchronizationJobId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   * The bulk upload operation for the job.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'synchronizationJob-id': this.synchronizationJobId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
      );
  }

  /**
   * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['body'],
    params?: Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
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
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
      );
  }
}
