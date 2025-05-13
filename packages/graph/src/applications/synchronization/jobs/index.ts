import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { BulkUploadClient } from './bulkUpload';
import { PauseClient } from './pause';
import { ProvisionOnDemandClient } from './provisionOnDemand';
import { RestartClient } from './restart';
import { SchemaClient } from './schema';
import { StartClient } from './start';
import { ValidateCredentialsClient } from './validateCredentials';

/**
 * /applications/{application-id}/synchronization/jobs
 * Provides operations to manage the jobs property of the microsoft.graph.synchronization entity.
 */
export class JobsClient {
  protected baseUrl = '/applications/{application-id}/synchronization/jobs';
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
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
   *
   * Provides operations to manage the bulkUpload property of the microsoft.graph.synchronizationJob entity.
   */
  bulkUpload(synchronizationJobId: string) {
    return new BulkUploadClient(synchronizationJobId, this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause`
   *
   * Provides operations to call the pause method.
   */
  pause(synchronizationJobId: string) {
    return new PauseClient(synchronizationJobId, this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand`
   *
   * Provides operations to call the provisionOnDemand method.
   */
  provisionOnDemand(synchronizationJobId: string) {
    return new ProvisionOnDemandClient(synchronizationJobId, this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart`
   *
   * Provides operations to call the restart method.
   */
  restart(synchronizationJobId: string) {
    return new RestartClient(synchronizationJobId, this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema`
   *
   * Provides operations to manage the schema property of the microsoft.graph.synchronizationJob entity.
   */
  schema(synchronizationJobId: string) {
    return new SchemaClient(synchronizationJobId, this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/start`
   *
   * Provides operations to call the start method.
   */
  start(synchronizationJobId: string) {
    return new StartClient(synchronizationJobId, this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials`
   *
   * Provides operations to call the validateCredentials method.
   */
  validateCredentials(synchronizationJobId: string) {
    return new ValidateCredentialsClient(synchronizationJobId, this.http);
  }

  /**
   * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/jobs`
   *
   * Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
   */
  async list(
    params?: Endpoints['GET /applications/{application-id}/synchronization/jobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/synchronization/jobs']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
   *
   * Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
      );
  }

  /**
   * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['body'],
    params?: Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
      );
  }

  /**
   * `POST /applications/{application-id}/synchronization/jobs`
   *
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/jobs']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/jobs']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/jobs']['response']
      );
  }
}
