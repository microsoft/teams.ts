export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/insights/trending/{trending-id}': Operation<
    '/users/{user-id}/insights/trending/{trending-id}',
    'delete'
  >;
  'GET /users/{user-id}/insights/trending': Operation<'/users/{user-id}/insights/trending', 'get'>;
  'GET /users/{user-id}/insights/trending/{trending-id}': Operation<
    '/users/{user-id}/insights/trending/{trending-id}',
    'get'
  >;
  'PATCH /users/{user-id}/insights/trending/{trending-id}': Operation<
    '/users/{user-id}/insights/trending/{trending-id}',
    'patch'
  >;
  'POST /users/{user-id}/insights/trending': Operation<
    '/users/{user-id}/insights/trending',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/insights/trending/{trending-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/insights/trending/{trending-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/insights/trending/{trending-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/insights/trending/{trending-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'trending-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/trending`
 *
 * Access this property from the derived type itemInsights.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/trending']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/trending']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/trending',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/trending/{trending-id}`
 *
 * Access this property from the derived type itemInsights.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/trending/{trending-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/trending/{trending-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'trending-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/insights/trending/{trending-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/insights/trending/{trending-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/insights/trending/{trending-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/insights/trending/{trending-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/insights/trending/{trending-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'trending-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/insights/trending`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/insights/trending']['body'],
  params?: IEndpoints['POST /users/{user-id}/insights/trending']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/insights/trending']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/insights/trending',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
