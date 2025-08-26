import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'delete'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
    'get'
  >;
  'GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'get'
  >;
  'PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'patch'
  >;
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
    'post'
  >;
}

/**
 * `DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingService-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/services`
 *
 * All the services offered by this business. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
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
 * `GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
 *
 * All the services offered by this business. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingService-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['body'],
  params?: IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingService-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/bookingBusinesses/{bookingBusiness-id}/services`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['body'],
  params?: IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/bookingBusinesses/{bookingBusiness-id}/services']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/bookingBusinesses/{bookingBusiness-id}/services',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
