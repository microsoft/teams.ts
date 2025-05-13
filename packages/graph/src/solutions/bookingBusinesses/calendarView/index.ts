import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CancelClient } from './cancel';

/**
 * /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView
 * Provides operations to manage the calendarView property of the microsoft.graph.bookingBusiness entity.
 */
export class CalendarViewClient {
  protected baseUrl = '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView';
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
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel`
   *
   * Provides operations to call the cancel method.
   */
  cancel(bookingAppointmentId: string) {
    return new CancelClient(bookingAppointmentId, this.http);
  }

  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingAppointment-id', in: 'path' },
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
          res.data as Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView`
   *
   * Get the collection of bookingAppointment objects for a bookingBusiness that occurs in the specified date range.
   */
  async get(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView',
      [
        { name: 'start', in: 'query' },
        { name: 'end', in: 'query' },
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
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
   *
   * The set of appointments of this business in a specified date range. Read-only. Nullable.
   */
  async get$1(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
      [
        { name: 'start', in: 'query' },
        { name: 'end', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingAppointment-id', in: 'path' },
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
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['body'],
    params?: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
      [
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingAppointment-id', in: 'path' },
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
          res.data as Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
      );
  }

  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView`
   *
   */
  async create(
    body: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['body'],
    params?: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView',
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
          res.data as Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['response']
      );
  }
}
