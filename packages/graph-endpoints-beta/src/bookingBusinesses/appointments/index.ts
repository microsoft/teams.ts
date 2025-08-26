export * as cancel from './cancel';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments',
    'get'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    'patch'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/appointments': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/appointments',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 * All the appointments of this business. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments',
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
 * `GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 * All the appointments of this business. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
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
 * `PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments/{bookingAppointment-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingAppointment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/appointments`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/appointments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/appointments',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
