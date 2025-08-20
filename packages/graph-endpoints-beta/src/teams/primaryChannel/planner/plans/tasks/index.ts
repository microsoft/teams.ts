export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks`
 *
 * Collection of tasks in the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 * Collection of tasks in the plan. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
