import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './services-types.ts';

/**
 * /solutions/bookingBusinesses/{bookingBusiness-id}/services
 * Provides operations to manage the services property of the microsoft.graph.bookingBusiness entity.
 */
export class ServicesClient {
  protected baseUrl = '/solutions/bookingBusinesses/{bookingBusiness-id}/services';
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
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   * Delete a bookingService object in the specified bookingBusiness.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingService-id', in: 'path' },
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
          res.data as Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/services`
   *
   * Get a list of bookingService objects in the specified bookingBusiness.
   */
  async list(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
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
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   * Get the properties and relationships of a bookingService object in the specified bookingBusiness.
   */
  async get(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingService-id', in: 'path' },
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
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
   *
   * Update the properties of a bookingService object in the specified bookingBusiness. The following are some examples you can customize for a service:
- Price
- Typical length of an appointment
- Reminders
- Any time buffer to set up before or finish up after the service
- Scheduling policy parameters, such as minimum notice to book or cancel, and whether customers can select specific staff members for an appointment.
   */
  async update(
    body: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['body'],
    params?: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
      [
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingService-id', in: 'path' },
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
          res.data as Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
      );
  }

  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/services`
   *
   * Create a new bookingService for the specified bookingBusiness.
   */
  async create(
    body: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['body'],
    params?: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
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
          res.data as Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
      );
  }
}
