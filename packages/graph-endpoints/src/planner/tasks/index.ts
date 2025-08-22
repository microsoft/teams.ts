export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/tasks/{plannerTask-id}': Operation<'/planner/tasks/{plannerTask-id}', 'delete'>;
  'GET /planner/tasks': Operation<'/planner/tasks', 'get'>;
  'GET /planner/tasks/{plannerTask-id}': Operation<'/planner/tasks/{plannerTask-id}', 'get'>;
  'PATCH /planner/tasks/{plannerTask-id}': Operation<'/planner/tasks/{plannerTask-id}', 'patch'>;
  'POST /planner/tasks': Operation<'/planner/tasks', 'post'>;
}

/**
 * `DELETE /planner/tasks/{plannerTask-id}`
 *
 * Delete a plannerTask object.
 */
export function del(
  params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/tasks/{plannerTask-id}']['response']> {
  return {
    method: 'delete',
    path: '/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/tasks`
 *
 * Retrieve a list of plannertask objects.
 */
export function list(
  params?: IEndpoints['GET /planner/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /planner/tasks']['response']> {
  return {
    method: 'get',
    path: '/planner/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /planner/tasks/{plannerTask-id}`
 *
 * Retrieve the properties and relationships of plannerTask object.
 */
export function get(
  params?: IEndpoints['GET /planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /planner/tasks/{plannerTask-id}']['response']> {
  return {
    method: 'get',
    path: '/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/tasks/{plannerTask-id}`
 *
 * Update the properties of plannerTask object.
 */
export function update(
  body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/tasks/{plannerTask-id}']['response']> {
  return {
    method: 'patch',
    path: '/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /planner/tasks`
 *
 * Create a new plannerTask.
 */
export function create(
  body: IEndpoints['POST /planner/tasks']['body'],
  params?: IEndpoints['POST /planner/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /planner/tasks']['response']> {
  return {
    method: 'post',
    path: '/planner/tasks',
    paramDefs: [],
    params,
    body,
  };
}
