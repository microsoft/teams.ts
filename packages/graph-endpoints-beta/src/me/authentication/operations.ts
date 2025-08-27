import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/operations/{longRunningOperation-id}': Operation<
    '/me/authentication/operations/{longRunningOperation-id}',
    'delete'
  >;
  'GET /me/authentication/operations': Operation<'/me/authentication/operations', 'get'>;
  'GET /me/authentication/operations/{longRunningOperation-id}': Operation<
    '/me/authentication/operations/{longRunningOperation-id}',
    'get'
  >;
  'PATCH /me/authentication/operations/{longRunningOperation-id}': Operation<
    '/me/authentication/operations/{longRunningOperation-id}',
    'patch'
  >;
  'POST /me/authentication/operations': Operation<'/me/authentication/operations', 'post'>;
}

/**
 * `DELETE /me/authentication/operations/{longRunningOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/operations/{longRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/operations/{longRunningOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'longRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/operations`
 *
 * Represents the status of a long-running operation, such as a password reset operation.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/operations']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/operations',
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
 * `GET /me/authentication/operations/{longRunningOperation-id}`
 *
 * Represents the status of a long-running operation, such as a password reset operation.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/operations/{longRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/operations/{longRunningOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'longRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/operations/{longRunningOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/operations/{longRunningOperation-id}']['body'],
  params?: IEndpoints['PATCH /me/authentication/operations/{longRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/operations/{longRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/operations/{longRunningOperation-id}',
    paramDefs: [{ name: 'longRunningOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/authentication/operations`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/operations']['body'],
  params?: IEndpoints['POST /me/authentication/operations']['parameters']
): EndpointRequest<IEndpoints['POST /me/authentication/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/operations',
    paramDefs: [],
    params,
    body,
  };
}
