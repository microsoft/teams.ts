import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './discover-types.ts';

/**
 * /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover
 * Provides operations to call the discover method.
 */
export class DiscoverClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover';
  protected http: http.Client;

  constructor(
    protected readonly directoryDefinitionId: string,
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
   * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover`
   *
   * Discover the latest schema definition for provisioning to an application.
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationJob-id', in: 'path' },
        { name: 'directoryDefinition-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'directoryDefinition-id': this.directoryDefinitionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}/discover']['response']
      );
  }
}
