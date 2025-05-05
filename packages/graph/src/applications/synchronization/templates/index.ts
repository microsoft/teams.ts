import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { SchemaClient } from './schema';

/**
 * /applications/{application-id}/synchronization/templates
 * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
 */
export class TemplatesClient {
  protected baseUrl = '/applications/{application-id}/synchronization/templates';
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
   * `/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
   *
   * Provides operations to manage the schema property of the microsoft.graph.synchronizationTemplate entity.
   */
  schema(synchronizationTemplateId: string) {
    return new SchemaClient(synchronizationTemplateId, this.http);
  }

  /**
   * `DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/templates`
   *
   * Preconfigured synchronization settings for a particular application.
   */
  async list(
    params?: Endpoints['GET /applications/{application-id}/synchronization/templates']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates',
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
          res.data as Endpoints['GET /applications/{application-id}/synchronization/templates']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}`
   *
   * Preconfigured synchronization settings for a particular application.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
      );
  }

  /**
   * `PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}`
   *
   * Update (override) the synchronization template associated with a given application.
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['body'],
    params?: Endpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
      );
  }

  /**
   * `POST /applications/{application-id}/synchronization/templates`
   *
   */
  async create(
    body: Endpoints['POST /applications/{application-id}/synchronization/templates']['body'],
    params?: Endpoints['POST /applications/{application-id}/synchronization/templates']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /applications/{application-id}/synchronization/templates']['response']
      );
  }
}
