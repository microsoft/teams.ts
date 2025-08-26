export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks',
    'get'
  >;
  'GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /users/{user-id}/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks`
 *
 * Read-only. Nullable. Collection of tasks in the plan.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks',
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
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Collection of tasks in the plan.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/planner/plans/{plannerPlan-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/tasks']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/planner/plans/{plannerPlan-id}/tasks']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/planner/plans/{plannerPlan-id}/tasks',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
