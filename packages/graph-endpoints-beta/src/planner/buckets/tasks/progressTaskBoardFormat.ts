import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
  'GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
 */
export function get(
  params?: IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/buckets/{plannerBucket-id}/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerBucket-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
