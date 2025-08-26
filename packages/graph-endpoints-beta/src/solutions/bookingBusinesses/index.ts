export * as appointments from './appointments';
export * as calendarView from './calendarView';
export * as customQuestions from './customQuestions';
export * as customers from './customers';
export * as getStaffAvailability from './getStaffAvailability';
export * as publish from './publish';
export * as services from './services';
export * as staffMembers from './staffMembers';
export * as unpublish from './unpublish';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses': Operation<'/solutions/bookingBusinesses', 'get'>;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses': Operation<'/solutions/bookingBusinesses', 'post'>;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}`
 *
 * Delete a bookingBusiness object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses`
 *
 * A collection of businesses in Microsoft Bookings. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}`
 *
 * A collection of businesses in Microsoft Bookings. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/bookingBusinesses',
    paramDefs: [],
    params,
    body,
  };
}
