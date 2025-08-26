import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
  'GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
 */
export function get(
  params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
