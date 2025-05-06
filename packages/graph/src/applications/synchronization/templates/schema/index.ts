import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { DirectoriesClient } from './directories';
import { ParseExpressionClient } from './parseExpression';

/**
 * /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema
 * Provides operations to manage the schema property of the microsoft.graph.synchronizationTemplate entity.
 */
export class SchemaClient {
  protected baseUrl =
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema';
  protected http: http.Client;

  constructor(
    protected readonly synchronizationTemplateId: string,
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
   * `/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories`
   *
   * Provides operations to manage the directories property of the microsoft.graph.synchronizationSchema entity.
   */
  get directories() {
    return new DirectoriesClient(this.http);
  }

  /**
   * `/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression`
   *
   * Provides operations to call the parseExpression method.
   */
  get parseExpression() {
    return new ParseExpressionClient(this.http);
  }

  /**
   * `DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
   *
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'synchronizationTemplate-id': this.synchronizationTemplateId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
      );
  }

  /**
   * `GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
   *
   * Default synchronization schema for the jobs based on this template.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'synchronizationTemplate-id': this.synchronizationTemplateId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
      );
  }

  /**
   * `PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
   *
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['body'],
    params?: Endpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
      [
        { name: 'application-id', in: 'path' },
        { name: 'synchronizationTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'synchronizationTemplate-id': this.synchronizationTemplateId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
      );
  }
}
