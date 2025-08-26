import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    method: 'delete',
    path: '/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
 */
export function get(
  params?: IEndpoints['GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    method: 'get',
    path: '/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
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
 * `PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    method: 'patch',
    path: '/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
