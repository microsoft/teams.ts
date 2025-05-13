import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './customers-types.ts';

/**
 * /solutions/bookingBusinesses/{bookingBusiness-id}/customers
 * Provides operations to manage the customers property of the microsoft.graph.bookingBusiness entity.
 */
export class CustomersClient {
  protected baseUrl = '/solutions/bookingBusinesses/{bookingBusiness-id}/customers';
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
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}`
   *
   * Delete the specified bookingCustomer object.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingCustomerBase-id', in: 'path' },
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
          res.data as Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers`
   *
   * Get a list of bookingCustomer objects of a business.
   */
  async list(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customers',
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
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}`
   *
   * Get the properties and relationships of a bookingCustomer object.
   */
  async get(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingCustomerBase-id', in: 'path' },
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
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}`
   *
   * Update the properties of a bookingCustomer object.
   */
  async update(
    body: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['body'],
    params?: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}',
      [
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingCustomerBase-id', in: 'path' },
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
          res.data as Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomerBase-id}']['response']
      );
  }

  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers`
   *
   * Create a new bookingCustomer object.
   */
  async create(
    body: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['body'],
    params?: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/customers',
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
          res.data as Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/customers']['response']
      );
  }
}
