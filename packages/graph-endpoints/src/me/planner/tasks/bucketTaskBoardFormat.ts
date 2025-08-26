import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'delete'
  >;
  'GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    method: 'delete',
    path: '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
 */
export function get(
  params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    method: 'get',
    path: '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat']['response']
> {
  return {
    method: 'patch',
    path: '/me/planner/tasks/{plannerTask-id}/bucketTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
