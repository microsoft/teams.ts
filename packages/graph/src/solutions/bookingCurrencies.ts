import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './bookingCurrencies-types.ts';

/**
 * /solutions/bookingCurrencies
 * Provides operations to manage the bookingCurrencies property of the microsoft.graph.solutionsRoot entity.
 */
export class BookingCurrenciesClient {
  protected baseUrl = '/solutions/bookingCurrencies';
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
   * `DELETE /solutions/bookingCurrencies/{bookingCurrency-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingCurrencies/{bookingCurrency-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'bookingCurrency-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
      );
  }

  /**
   * `GET /solutions/bookingCurrencies`
   *
   * Get a list of bookingCurrency objects available to a Microsoft Bookings business.
   */
  async list(
    params?: Endpoints['GET /solutions/bookingCurrencies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingCurrencies',
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
      .then((res) => res.data as Endpoints['GET /solutions/bookingCurrencies']['response']);
  }

  /**
   * `GET /solutions/bookingCurrencies/{bookingCurrency-id}`
   *
   * Get the properties of a bookingCurrency object that is available to a Microsoft Bookings business. Use the id property, which is the currency code, to specify the currency.
   */
  async get(
    params?: Endpoints['GET /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingCurrencies/{bookingCurrency-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'bookingCurrency-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/bookingCurrencies/{bookingCurrency-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['body'],
    params?: Endpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingCurrencies/{bookingCurrency-id}',
      [{ name: 'bookingCurrency-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/bookingCurrencies/{bookingCurrency-id}']['response']
      );
  }

  /**
   * `POST /solutions/bookingCurrencies`
   *
   */
  async create(
    body: Endpoints['POST /solutions/bookingCurrencies']['body'],
    params?: Endpoints['POST /solutions/bookingCurrencies']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/bookingCurrencies', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /solutions/bookingCurrencies']['response']);
  }
}
