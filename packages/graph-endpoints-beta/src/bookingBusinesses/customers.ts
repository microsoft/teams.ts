import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'delete'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/customers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers',
    'get'
  >;
  'GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'get'
  >;
  'PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    'patch'
  >;
  'POST /bookingBusinesses/{bookingBusiness-id}/customers': Operation<
    '/bookingBusinesses/{bookingBusiness-id}/customers',
    'post'
  >;
}

/**
 * `DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /bookingBusinesses/{bookingBusiness-id}/customers`
 *
 * All the customers of this business. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/customers',
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
 * `GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
 *
 * All the customers of this business. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['body'],
  params?: IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/bookingBusinesses/{bookingBusiness-id}/customers/{bookingCustomer-id}',
    paramDefs: [
      { name: 'bookingBusiness-id', in: 'path' },
      { name: 'bookingCustomer-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /bookingBusinesses/{bookingBusiness-id}/customers`
 *
 */
export function create(
  body: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customers']['body'],
  params?: IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customers']['parameters']
): EndpointRequest<
  IEndpoints['POST /bookingBusinesses/{bookingBusiness-id}/customers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/bookingBusinesses/{bookingBusiness-id}/customers',
    paramDefs: [{ name: 'bookingBusiness-id', in: 'path' }],
    params,
    body,
  };
}
