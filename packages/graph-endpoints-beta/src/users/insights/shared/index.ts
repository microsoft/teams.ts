export * as lastSharedMethod from './lastSharedMethod';
export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'delete'
  >;
  'GET /users/{user-id}/insights/shared': Operation<'/users/{user-id}/insights/shared', 'get'>;
  'GET /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'patch'
  >;
  'POST /users/{user-id}/insights/shared': Operation<'/users/{user-id}/insights/shared', 'post'>;
}

/**
 * `DELETE /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/shared`
 *
 * Access this property from the derived type itemInsights.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/shared']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/shared']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/shared',
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
 * `GET /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 * Access this property from the derived type itemInsights.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sharedInsight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/insights/shared`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/insights/shared']['body'],
  params?: IEndpoints['POST /users/{user-id}/insights/shared']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/insights/shared']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/insights/shared',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
