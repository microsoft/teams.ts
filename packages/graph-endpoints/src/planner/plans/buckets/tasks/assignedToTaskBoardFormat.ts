import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
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
 * `GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
 */
export function get(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
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
 * `PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
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
