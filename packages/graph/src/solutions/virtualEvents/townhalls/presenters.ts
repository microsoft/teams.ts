import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './presenters-types.ts';

/**
 * /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters
 * Provides operations to manage the presenters property of the microsoft.graph.virtualEvent entity.
 */
export class PresentersClient {
  protected baseUrl = '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventTownhallId: string,
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
   * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
   *
   * Delete a virtualEventPresenter from a virtual event. Currently the supported virtual event types are:
- virtualEventTownhall
- virtualEventWebinar
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventTownhall-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters`
   *
   * Get the list of all virtualEventPresenter objects associated with a virtual event. Currently the supported virtual event types are:
- virtualEventTownhall
- virtualEventWebinar
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventTownhall-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
   *
   * Read the properties and relationships of a virtualEventPresenter object. Currently the supported virtual event types are: 
- virtualEventTownhall
- virtualEventWebinar
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventTownhall-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: 'virtualEventTownhall-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters`
   *
   * Create a new virtualEventPresenter object on a virtual event. Currently, the following types of virtual events are supported: 
- virtualEventTownhall
- virtualEventWebinar
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters',
      [{ name: 'virtualEventTownhall-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEventTownhall-id': this.virtualEventTownhallId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/presenters']['response']
      );
  }
}
