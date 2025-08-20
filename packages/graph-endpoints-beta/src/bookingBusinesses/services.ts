import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services',
    'get'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    'patch'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/services': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/services',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingService-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/services`
 *
 * All the services offered by this business. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services']['parameters']
): EndpointRequest<IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/services',
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
 * `GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
 *
 * All the services offered by this business. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
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
 * `PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}/services/{bookingService-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingService-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/services`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/services']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/services']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/services']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/services',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
