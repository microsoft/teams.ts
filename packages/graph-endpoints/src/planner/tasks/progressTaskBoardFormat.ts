import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'delete'
  >;
  'GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    method: 'delete',
    path: '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 * Retrieve the properties and relationships of plannerProgressTaskBoardTaskFormat object.
 */
export function get(
  params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    method: 'get',
    path: '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat`
 *
 * Update the properties of plannerProgressTaskBoardTaskFormat object.
 */
export function update(
  body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/tasks/{plannerTask-id}/progressTaskBoardFormat']['response']
> {
  return {
    method: 'patch',
    path: '/planner/tasks/{plannerTask-id}/progressTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
