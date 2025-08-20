export * as appointments from './appointments';
export * as calendarView from './calendarView';
export * as customQuestions from './customQuestions';
export * as customers from './customers';
export * as getStaffAvailability from './getStaffAvailability';
export * as publish from './publish';
export * as services from './services';
export * as staffMembers from './staffMembers';
export * as unpublish from './unpublish';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}',
    'delete'
  >;
  'GET /bookingBusinesses': Operation<'/bookingBusinesses', 'get'>;
  'GET /bookingBusinesses/{bookingBusiness-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}',
    'patch'
  >;
  'POST /bookingBusinesses': Operation<'/bookingBusinesses', 'post'>;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingBusinesses`
 *
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['GET /bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses',
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
 * `GET /bookingBusinesses/{bookingBusiness-id}`
 *
 * Represents a Microsoft Bookings Business.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /bookingBusinesses/{bookingBusiness-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses']['body'],
  params?: IEndpoints['POST /bookingBusinesses']['parameters']
): EndpointRequest<IEndpoints['POST /bookingBusinesses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses',
    paramDefs: [],
    params,
    body,
  };
}
