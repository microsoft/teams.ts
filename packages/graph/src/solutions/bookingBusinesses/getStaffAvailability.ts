import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './getStaffAvailability-types.ts';

/**
 * /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability
 * Provides operations to call the getStaffAvailability method.
 */
export class GetStaffAvailabilityClient {
  protected baseUrl = '/solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability';
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
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability`
   *
   * Get the availability information of staff members of a Microsoft Bookings calendar.
   */
  async create(
    body: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['body'],
    params?: Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability',
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
          res.data as Endpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability']['response']
      );
  }
}
