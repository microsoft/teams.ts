import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 * Retrieve the properties and relationships of plannerBucketTaskBoardTaskFormat object.
 */
export function get(
  params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 * Update the properties of a plannerBucketTaskBoardTaskFormat object.
 */
export function update(
  body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
