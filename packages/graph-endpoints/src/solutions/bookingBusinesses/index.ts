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
 * Get a collection of bookingBusiness objects that has been created for the tenant. This operation returns only the id and displayName of each Microsoft Bookings business in the collection. For performance considerations, it does not return other properties. You can get the other properties of a Bookings business by specifying its id in a GET operation.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/bookingBusinesses']['response']> {
  return {
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
 * Get the properties and relationships of a bookingBusiness object.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
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
 * Update the properties of a bookingBusiness object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}']['response']
> {
  return {
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
 * Create a new Microsoft Bookings business in a tenant. This is the first step in setting up a Bookings business where you must specify the business display name. You can include other information such as business address, web site address, and scheduling policy, or set that information later by updating the bookingBusiness.
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/bookingBusinesses']['response']> {
  return {
    method: 'post',
    path: '/solutions/bookingBusinesses',
    paramDefs: [],
    params,
    body,
  };
}
