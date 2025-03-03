import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './cancel-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

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
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
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
