export * as cancel from './cancel';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    'get'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * Delete a bookingAppointment in the specified bookingBusiness.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 * Get a list of bookingAppointment objects for the specified bookingBusiness.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    paramDefs: [
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
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * Get the properties and relationships of a bookingAppointment object in the specified bookingBusiness. The start and end properties are always returned in UTC.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * Update the properties of a bookingAppointment object in the specified bookingBusiness.
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 * Create a new bookingAppointment for the specified bookingBusiness.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/appointments',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
