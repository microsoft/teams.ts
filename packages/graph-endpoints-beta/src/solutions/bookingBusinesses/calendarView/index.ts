import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView',
    'get'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView',
    'post'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView`
 *
 * The set of appointments of this business in a specified date range. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView',
    paramDefs: {
      path: ['bookingBusiness-id'],
      query: [
        'start',
        'end',
        '$top',
        '$skip',
        '$search',
        '$filter',
        '$count',
        '$orderby',
        '$select',
        '$expand',
      ],
    },
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
 *
 * The set of appointments of this business in a specified date range. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    paramDefs: {
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
      query: ['start', 'end', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    paramDefs: {
      path: ['bookingBusiness-id', 'bookingAppointment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView',
    paramDefs: {
      path: ['bookingBusiness-id'],
    },
    params,
    body,
  };
}

export const cancel = {
  /**
   * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel`
   *
   * Cancel the specified bookingAppointment in the specified bookingBusiness, and send a message to the involved customer and staff members.
   */
  create: function create(
    body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['body'],
    params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/solutions/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}/cancel',
      paramDefs: {
        path: ['bookingBusiness-id', 'bookingAppointment-id'],
      },
      params,
      body,
    };
  },
};
