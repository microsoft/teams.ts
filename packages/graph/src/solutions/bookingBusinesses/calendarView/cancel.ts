import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './cancel-types.ts';

/**
 * /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel
 * Provides operations to call the cancel method.
 */
export class CancelClient {
  protected baseUrl =
    '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel';
  protected http: http.Client;

  constructor(
    protected readonly bookingAppointmentId: string,
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
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel`
   *
   * Cancel the specified bookingAppointment in the specified bookingBusiness and send a message to the involved customer and staff members.
   */
  async create(
    body: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['body'],
    params?: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel',
      [
        { name: 'bookingBusiness-id', in: 'path' },
        { name: 'bookingAppointment-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'bookingAppointment-id': this.bookingAppointmentId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['response']
      );
  }
}
