import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/all/{plannerDelta-id}': Operation<
    '/users/{user-id}/planner/all/{plannerDelta-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/all': Operation<'/users/{user-id}/planner/all', 'get'>;
  'GET /users/{user-id}/planner/all/{plannerDelta-id}': Operation<
    '/users/{user-id}/planner/all/{plannerDelta-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/all/{plannerDelta-id}': Operation<
    '/users/{user-id}/planner/all/{plannerDelta-id}',
    'patch'
  >;
  'POST /users/{user-id}/planner/all': Operation<'/users/{user-id}/planner/all', 'post'>;
}

/**
 * `DELETE /users/{user-id}/planner/all/{plannerDelta-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/all/{plannerDelta-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/all/{plannerDelta-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/planner/all/{plannerDelta-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerDelta-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/all`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/all']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/all']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/all',
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
 * `GET /users/{user-id}/planner/all/{plannerDelta-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/planner/all/{plannerDelta-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/all/{plannerDelta-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/all/{plannerDelta-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerDelta-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/all/{plannerDelta-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/all/{plannerDelta-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/all/{plannerDelta-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/planner/all/{plannerDelta-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/planner/all/{plannerDelta-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerDelta-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/planner/all`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/all']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/all']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/planner/all']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/planner/all',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
