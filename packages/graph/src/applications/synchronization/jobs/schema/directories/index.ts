import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { DiscoverClient } from './discover';

/**
 * /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories
 * Provides operations to manage the directories property of the microsoft.graph.synchronizationSchema entity.
 */
export class DirectoriesClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories';
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
   * `/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover`
   *
   * Provides operations to call the discover method.
   */
  discover(directoryDefinitionId: string) {
    return new DiscoverClient(directoryDefinitionId, this.http);
  }

  /**
   * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
        { name: 'directoryDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
   *
   * Contains the collection of directories and all of their objects.
   */
  async list(
    params?: Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
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
          res.data as Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
   *
   * Contains the collection of directories and all of their objects.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
        { name: 'directoryDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
      );
  }

  /**
   * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['body'],
    params?: Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
        { name: 'directoryDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
      );
  }

  /**
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
   *
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
      );
  }
}
