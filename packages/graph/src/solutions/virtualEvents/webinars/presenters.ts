import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './presenters-types.ts';

/**
 * /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters
 * Provides operations to manage the presenters property of the microsoft.graph.virtualEvent entity.
 */
export class PresentersClient {
  protected baseUrl = '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventWebinarId: string,
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
   * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters`
   *
   * The virtual event presenters.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
   *
   * The virtual event presenters.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}`
   *
   * Update the properties of a virtualEventPresenter object. Currently the supported virtual event types are:
- virtualEventWebinar.
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: 'virtualEventWebinar-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters`
   *
   * Create a new virtualEventPresenter object on a virtual event. Currently, the following types of virtual events are supported:
- virtualEventTownhall
- virtualEventWebinar
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters',
      [{ name: 'virtualEventWebinar-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEventWebinar-id': this.virtualEventWebinarId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/presenters']['response']
      );
  }
}
