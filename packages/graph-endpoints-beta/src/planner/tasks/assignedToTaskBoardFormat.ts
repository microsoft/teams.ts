import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'delete'
  >;
  'GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat': Operation<
    '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    'patch'
  >;
}

/**
 * `DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 * Retrieve the properties and relationships of plannerAssignedToTaskBoardTaskFormat object.
 */
export function get(
  params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat`
 *
 * Update the properties of plannerAssignedToTaskBoardTaskFormat object.
 */
export function update(
  body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['body'],
  params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/tasks/{plannerTask-id}/assignedToTaskBoardFormat',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
