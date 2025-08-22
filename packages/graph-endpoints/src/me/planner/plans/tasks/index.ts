export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks',
    'get'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /me/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/me/planner/plans/{plannerPlan-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/tasks`
 *
 * Read-only. Nullable. Collection of tasks in the plan.
 */
export function list(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}/tasks']['response']> {
  return {
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Collection of tasks in the plan.
 */
export function get(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/planner/plans/{plannerPlan-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/tasks']['body'],
  params?: IEndpoints['POST /me/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /me/planner/plans/{plannerPlan-id}/tasks']['response']> {
  return {
    method: 'post',
    path: '/me/planner/plans/{plannerPlan-id}/tasks',
    paramDefs: [{ name: 'plannerPlan-id', in: 'path' }],
    params,
    body,
  };
}
