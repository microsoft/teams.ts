import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { LearningContentsClient } from './learningContents';
import { LearningCourseActivitiesClient } from './learningCourseActivities';

/**
 * /employeeExperience/learningProviders
 * Provides operations to manage the learningProviders property of the microsoft.graph.employeeExperience entity.
 */
export class LearningProvidersClient {
  protected baseUrl = '/employeeExperience/learningProviders';
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
   * `/employeeExperience/learningProviders/{learningProvider-id}/learningContents`
   *
   * Provides operations to manage the learningContents property of the microsoft.graph.learningProvider entity.
   */
  learningContents(learningProviderId: string) {
    return new LearningContentsClient(learningProviderId, this.http);
  }

  /**
   * `/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities`
   *
   * Provides operations to manage the learningCourseActivities property of the microsoft.graph.learningProvider entity.
   */
  learningCourseActivities(learningProviderId: string) {
    return new LearningCourseActivitiesClient(learningProviderId, this.http);
  }

  /**
   * `DELETE /employeeExperience/learningProviders/{learningProvider-id}`
   *
   * Delete a learningProvider resource and remove its registration in Viva Learning for a tenant.
   */
  async delete(
    params?: Endpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'learningProvider-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}']['response']
      );
  }

  /**
   * `GET /employeeExperience/learningProviders`
   *
   * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
   */
  async list(
    params?: Endpoints['GET /employeeExperience/learningProviders']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /employeeExperience/learningProviders']['response']
      );
  }

  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}`
   *
   * Read the properties and relationships of a learningProvider object.
   */
  async get(
    params?: Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'learningProvider-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}']['response']
      );
  }

  /**
   * `PATCH /employeeExperience/learningProviders/{learningProvider-id}`
   *
   * Update the properties of a learningProvider object.
   */
  async update(
    body: Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['body'],
    params?: Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}',
      [{ name: 'learningProvider-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}']['response']
      );
  }

  /**
   * `POST /employeeExperience/learningProviders`
   *
   * Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.
   */
  async create(
    body: Endpoints['POST /employeeExperience/learningProviders']['body'],
    params?: Endpoints['POST /employeeExperience/learningProviders']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/employeeExperience/learningProviders', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then(
        (res) => res.data as Endpoints['POST /employeeExperience/learningProviders']['response']
      );
  }
}
