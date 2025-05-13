import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './customQuestions-types.ts';

/**
 * /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions
 * Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity.
 */
export class CustomQuestionsClient {
  protected baseUrl = '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions';
  protected http: http.Client;

  constructor(
    protected readonly bookingBusinessId: string,
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
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   * Delete a bookingCustomQuestion object.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingCustomQuestion-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'bookingBusiness-id': this.bookingBusinessId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   * Get the bookingCustomQuestion resources associated with a bookingBusiness.
   */
  async list(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'bookingBusiness-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'bookingBusiness-id': this.bookingBusinessId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   * Read the properties and relationships of a bookingCustomQuestion object.
   */
  async get(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingCustomQuestion-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'bookingBusiness-id': this.bookingBusinessId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}`
   *
   * Update the properties of a bookingCustomQuestion object.
   */
  async update(
    body: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['body'],
    params?: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}',
      [
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingCustomQuestion-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'bookingBusiness-id': this.bookingBusinessId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions/{bookingCustomQuestion-id}']['response']
      );
  }

  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   * Create a new bookingCustomQuestion object.
   */
  async create(
    body: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['body'],
    params?: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions',
      [{ name: 'bookingBusiness-id', in: 'path' }],
      {
        ...(params || {}),
        'bookingBusiness-id': this.bookingBusinessId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions']['response']
      );
  }
}
