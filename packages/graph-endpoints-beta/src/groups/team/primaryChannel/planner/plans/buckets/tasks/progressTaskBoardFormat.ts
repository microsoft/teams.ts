import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel/planner/plans/{plannerPlan-id}/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
