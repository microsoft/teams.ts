import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AppointmentsClient } from './appointments';
import { CalendarViewClient } from './calendarView';
import { CustomQuestionsClient } from './customQuestions';
import { CustomersClient } from './customers';
import { GetStaffAvailabilityClient } from './getStaffAvailability';
import { PublishClient } from './publish';
import { ServicesClient } from './services';
import { StaffMembersClient } from './staffMembers';
import { UnpublishClient } from './unpublish';

/**
 * /solutions/bookingBusinesses
 * Provides operations to manage the bookingBusinesses property of the microsoft.graph.solutionsRoot entity.
 */
export class BookingBusinessesClient {
  protected baseUrl = '/solutions/bookingBusinesses';
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
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/appointments`
   *
   * Provides operations to manage the appointments property of the microsoft.graph.bookingBusiness entity.
   */
  appointments(bookingBusinessId: string) {
    return new AppointmentsClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView`
   *
   * Provides operations to manage the calendarView property of the microsoft.graph.bookingBusiness entity.
   */
  calendarView(bookingBusinessId: string) {
    return new CalendarViewClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/customQuestions`
   *
   * Provides operations to manage the customQuestions property of the microsoft.graph.bookingBusiness entity.
   */
  customQuestions(bookingBusinessId: string) {
    return new CustomQuestionsClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/customers`
   *
   * Provides operations to manage the customers property of the microsoft.graph.bookingBusiness entity.
   */
  customers(bookingBusinessId: string) {
    return new CustomersClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/getStaffAvailability`
   *
   * Provides operations to call the getStaffAvailability method.
   */
  getStaffAvailability(bookingBusinessId: string) {
    return new GetStaffAvailabilityClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/publish`
   *
   * Provides operations to call the publish method.
   */
  publish(bookingBusinessId: string) {
    return new PublishClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/services`
   *
   * Provides operations to manage the services property of the microsoft.graph.bookingBusiness entity.
   */
  services(bookingBusinessId: string) {
    return new ServicesClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/staffMembers`
   *
   * Provides operations to manage the staffMembers property of the microsoft.graph.bookingBusiness entity.
   */
  staffMembers(bookingBusinessId: string) {
    return new StaffMembersClient(bookingBusinessId, this.http);
  }

  /**
   * `/solutions/bookingBusinesses/{bookingBusiness-id}/unpublish`
   *
   * Provides operations to call the unpublish method.
   */
  unpublish(bookingBusinessId: string) {
    return new UnpublishClient(bookingBusinessId, this.http);
  }

  /**
   * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}`
   *
   * Delete a bookingBusiness object.
   */
  async delete(
    params?: Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'bookingBusiness-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
      );
  }

  /**
   * `GET /solutions/bookingBusinesses`
   *
   * Get a collection of bookingBusiness objects that has been created for the tenant. This operation returns only the id and displayName of each Microsoft Bookings business in the collection. For performance considerations, it does not return other properties. You can get the other properties of a Bookings business by specifying its id in a GET operation.
   */
  async list(
    params?: Endpoints['GET /solutions/bookingBusinesses']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses',
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
      .then((res) => res.data as Endpoints['GET /solutions/bookingBusinesses']['response']);
  }

  /**
   * `GET /solutions/bookingBusinesses/{bookingBusiness-id}`
   *
   * Get the properties and relationships of a bookingBusiness object.
   */
  async get(
    params?: Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'bookingBusiness-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
      );
  }

  /**
   * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}`
   *
   * Update the properties of a bookingBusiness object.
   */
  async update(
    body: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['body'],
    params?: Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/bookingBusinesses/{bookingBusiness-id}',
      [{ name: 'bookingBusiness-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
      );
  }

  /**
   * `POST /solutions/bookingBusinesses`
   *
   * Create a new Microsoft Bookings business in a tenant. This is the first step in setting up a Bookings business where you must specify the business display name. You can include other information such as business address, web site address, and scheduling policy, or set that information later by updating the bookingBusiness.
   */
  async create(
    body: Endpoints['POST /solutions/bookingBusinesses']['body'],
    params?: Endpoints['POST /solutions/bookingBusinesses']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/solutions/bookingBusinesses', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /solutions/bookingBusinesses']['response']);
  }
}
