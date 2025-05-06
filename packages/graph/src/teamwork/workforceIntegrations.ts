import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './workforceIntegrations-types.ts';

/**
 * /teamwork/workforceIntegrations
 * Provides operations to manage the workforceIntegrations property of the microsoft.graph.teamwork entity.
 */
export class WorkforceIntegrationsClient {
  protected baseUrl = '/teamwork/workforceIntegrations';
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
   * `DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}`
   *
   * Delete an instance of a workforceIntegration.
   */
  async delete(
    params?: Endpoints['DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/workforceIntegrations/{workforceIntegration-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'workforceIntegration-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
      );
  }

  /**
   * `GET /teamwork/workforceIntegrations`
   *
   * Retrieve a list of workforceIntegration objects.
   */
  async list(
    params?: Endpoints['GET /teamwork/workforceIntegrations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/workforceIntegrations',
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
      .then((res) => res.data as Endpoints['GET /teamwork/workforceIntegrations']['response']);
  }

  /**
   * `GET /teamwork/workforceIntegrations/{workforceIntegration-id}`
   *
   * Retrieve the properties and relationships of a workforceIntegration object.
   */
  async get(
    params?: Endpoints['GET /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/workforceIntegrations/{workforceIntegration-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'workforceIntegration-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
      );
  }

  /**
   * `PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}`
   *
   * Update the properties of a workforceIntegration object.
   */
  async update(
    body: Endpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['body'],
    params?: Endpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/workforceIntegrations/{workforceIntegration-id}',
      [{ name: 'workforceIntegration-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /teamwork/workforceIntegrations/{workforceIntegration-id}']['response']
      );
  }

  /**
   * `POST /teamwork/workforceIntegrations`
   *
   * Create a new workforceIntegration object.
You can set up which entities you want to receive Shifts synchronous change notifications on and set entities to configure filtering by WFM rules eligibility for, including swap requests.
   */
  async create(
    body: Endpoints['POST /teamwork/workforceIntegrations']['body'],
    params?: Endpoints['POST /teamwork/workforceIntegrations']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamwork/workforceIntegrations', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teamwork/workforceIntegrations']['response']);
  }
}
