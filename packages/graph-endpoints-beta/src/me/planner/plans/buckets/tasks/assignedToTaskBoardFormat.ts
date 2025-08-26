import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
 */
export function get(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
