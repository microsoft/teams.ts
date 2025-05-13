import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './teamsTemplates-types.ts';

/**
 * /teamsTemplates
 * Provides operations to manage the collection of teamsTemplate entities.
 */
export class TeamsTemplatesClient {
  protected baseUrl = '/teamsTemplates';
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
   * `DELETE /teamsTemplates/{teamsTemplate-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teamsTemplates/{teamsTemplate-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamsTemplates/{teamsTemplate-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'teamsTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /teamsTemplates/{teamsTemplate-id}']['response']
      );
  }

  /**
   * `GET /teamsTemplates`
   *
   */
  async list(params?: Endpoints['GET /teamsTemplates']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/teamsTemplates',
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
      .then((res) => res.data as Endpoints['GET /teamsTemplates']['response']);
  }

  /**
   * `GET /teamsTemplates/{teamsTemplate-id}`
   *
   */
  async get(
    params?: Endpoints['GET /teamsTemplates/{teamsTemplate-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamsTemplates/{teamsTemplate-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'teamsTemplate-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teamsTemplates/{teamsTemplate-id}']['response']);
  }

  /**
   * `PATCH /teamsTemplates/{teamsTemplate-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['body'],
    params?: Endpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamsTemplates/{teamsTemplate-id}',
      [{ name: 'teamsTemplate-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /teamsTemplates/{teamsTemplate-id}']['response']);
  }

  /**
   * `POST /teamsTemplates`
   *
   */
  async create(
    body: Endpoints['POST /teamsTemplates']['body'],
    params?: Endpoints['POST /teamsTemplates']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamsTemplates', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teamsTemplates']['response']);
  }
}
