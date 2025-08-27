export * as archive from './archive';
export * as buckets from './buckets';
export * as details from './details';
export * as moveToContainer from './moveToContainer';
export * as tasks from './tasks';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/plans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/plans': Operation<'/users/{user-id}/planner/plans', 'get'>;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/plans/{plannerPlan-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /users/{user-id}/planner/plans': Operation<'/users/{user-id}/planner/plans', 'post'>;
}

/**
 * `DELETE /users/{user-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/plans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/plans',
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
 * `GET /users/{user-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/plans']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/plans']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/planner/plans']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/planner/plans',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
