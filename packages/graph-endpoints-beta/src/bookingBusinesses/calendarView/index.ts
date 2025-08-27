export * as cancel from './cancel';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/calendarView': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/calendarView',
    'get'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    'patch'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/calendarView': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/calendarView',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/calendarView`
 *
 * The set of appointments of this business in a specified date range. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/calendarView']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/calendarView']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/calendarView',
    paramDefs: [
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
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
 *
 * The set of appointments of this business in a specified date range. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    paramDefs: [
      { name: 'start', in: 'query' },
      { name: 'end', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}/calendarView/{bookingAppointment-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/calendarView`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/calendarView']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/calendarView']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/calendarView']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/calendarView',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
