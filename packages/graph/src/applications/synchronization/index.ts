import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AcquireAccessTokenClient } from './acquireAccessToken';
import { JobsClient } from './jobs';
import { SecretsClient } from './secrets';
import { TemplatesClient } from './templates';

/**
 * /applications/{application-id}/synchronization
 * Provides operations to manage the synchronization property of the microsoft.graph.application entity.
 */
export class SynchronizationClient {
  protected baseUrl = '/applications/{application-id}/synchronization';
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
   * `/applications/{application-id}/synchronization/acquireAccessToken`
   *
   * Provides operations to call the acquireAccessToken method.
   */
  get acquireAccessToken() {
    return new AcquireAccessTokenClient(this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/jobs`
   *
   * Provides operations to manage the jobs property of the microsoft.graph.synchronization entity.
   */
  get jobs() {
    return new JobsClient(this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/secrets`
   *
   */
  get secrets() {
    return new SecretsClient(this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/templates`
   *
   * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
   */
  get templates() {
    return new TemplatesClient(this.http);
  }

  /**
   * `DELETE /applications/{application-id}/synchronization`
   *
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/synchronization']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /applications/{application-id}/synchronization']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization`
   *
   * Represents the capability for Microsoft Entra identity synchronization through the Microsoft Graph API.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/synchronization']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/synchronization']['response']
      );
  }

  /**
   * `PUT /applications/{application-id}/synchronization`
   *
   */
  async set(
    body: Endpoints['PUT /applications/{application-id}/synchronization']['body'],
    params?: Endpoints['PUT /applications/{application-id}/synchronization']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
        'application-id': this.applicationId,
      }
    );

    return this.http
      .put(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PUT /applications/{application-id}/synchronization']['response']
      );
  }
}
