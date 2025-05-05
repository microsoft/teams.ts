import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './presenters-types.ts';

/**
 * /solutions/virtualEvents/events/{virtualEvent-id}/presenters
 * Provides operations to manage the presenters property of the microsoft.graph.virtualEvent entity.
 */
export class PresentersClient {
  protected baseUrl = '/solutions/virtualEvents/events/{virtualEvent-id}/presenters';
  protected http: http.Client;

  constructor(
    protected readonly virtualEventId: string,
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
   * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'virtualEvent-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters`
   *
   * The virtual event presenters.
   */
  async list(
    params?: Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEvent-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['response']
      );
  }

  /**
   * `GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
   *
   * The virtual event presenters.
   */
  async get(
    params?: Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'virtualEvent-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['body'],
    params?: Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}',
      [
        { name: 'virtualEvent-id', in: 'path' },
        { name: 'virtualEventPresenter-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/presenters/{virtualEventPresenter-id}']['response']
      );
  }

  /**
   * `POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters`
   *
   */
  async create(
    body: Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['body'],
    params?: Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/virtualEvents/events/{virtualEvent-id}/presenters',
      [{ name: 'virtualEvent-id', in: 'path' }],
      {
        ...(params || {}),
        'virtualEvent-id': this.virtualEventId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/presenters']['response']
      );
  }
}
