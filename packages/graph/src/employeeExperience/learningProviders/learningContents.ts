import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './learningContents-types.ts';

/**
 * /employeeExperience/learningProviders/{learningProvider-id}/learningContents
 * Provides operations to manage the learningContents property of the microsoft.graph.learningProvider entity.
 */
export class LearningContentsClient {
  protected baseUrl =
    '/employeeExperience/learningProviders/{learningProvider-id}/learningContents';
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
   * `DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
   *
   * Delete the specified learningContent resource that represents the metadata of the specified provider&#x27;s ingested content.
   */
  async delete(
    params?: Endpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'learningProvider-id', in: 'path' },
        { name: 'learningContent-id', in: 'path' },
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
          res.data as Endpoints['DELETE /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
      );
  }

  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents`
   *
   * Get a list of the learningContent resources and their properties. This list represents the metadata of the specified provider&#x27;s content in Viva Learning.
   */
  async list(
    params?: Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
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
          res.data as Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['response']
      );
  }

  /**
   * `GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
   *
   * Get the specified learningContent resource which represents the metadata of the specified provider&#x27;s ingested content.
   */
  async get(
    params?: Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'learningProvider-id', in: 'path' },
        { name: 'learningContent-id', in: 'path' },
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
          res.data as Endpoints['GET /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
      );
  }

  /**
   * `PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['body'],
    params?: Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}',
      [
        { name: 'learningProvider-id', in: 'path' },
        { name: 'learningContent-id', in: 'path' },
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
          res.data as Endpoints['PATCH /employeeExperience/learningProviders/{learningProvider-id}/learningContents/{learningContent-id}']['response']
      );
  }

  /**
   * `POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents`
   *
   */
  async create(
    body: Endpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['body'],
    params?: Endpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/employeeExperience/learningProviders/{learningProvider-id}/learningContents',
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
          res.data as Endpoints['POST /employeeExperience/learningProviders/{learningProvider-id}/learningContents']['response']
      );
  }
}
