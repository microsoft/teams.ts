import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './learningCourseActivities-types.ts';

/**
 * /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities
 * Provides operations to manage the learningCourseActivities property of the microsoft.graph.learningProvider entity.
 */
export class LearningCourseActivitiesClient {
  protected baseUrl =
    '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities';
  protected http: http.Client;

  constructor(
    protected readonly learningProviderId: string,
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
   * `DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
   *
   * Delete a learningCourseActivity object using the course activity ID of either an assignment or a self-initiated activity.
   */
  async delete(
    params?: Endpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'learningProvider-id', in: 'path' },
        { name: 'learningCourseActivity-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'learningProvider-id': this.learningProviderId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
      );
  }

  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities`
   *
   * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
   */
  async list(
    params?: Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'learningProvider-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'learningProvider-id': this.learningProviderId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['response']
      );
  }

  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
   *
   */
  async get(
    params?: Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'learningProvider-id', in: 'path' },
        { name: 'learningCourseActivity-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'learningProvider-id': this.learningProviderId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
      );
  }

  /**
   * `PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}`
   *
   * Update the properties of a learningCourseActivity object.
   */
  async update(
    body: Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['body'],
    params?: Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}',
      [
        { name: 'learningProvider-id', in: 'path' },
        { name: 'learningCourseActivity-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'learningProvider-id': this.learningProviderId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities/{learningCourseActivity-id}']['response']
      );
  }

  /**
   * `POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities`
   *
   * Create a new learningCourseActivity object. A learning course activity can be one of two types: 
- Assignment
- Self-initiated Use this method to create either type of activity.
   */
  async create(
    body: Endpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['body'],
    params?: Endpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities',
      [{ name: 'learningProvider-id', in: 'path' }],
      {
        ...(params || {}),
        'learningProvider-id': this.learningProviderId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningCourseActivities']['response']
      );
  }
}
