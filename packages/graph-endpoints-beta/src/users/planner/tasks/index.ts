export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /users/{user-id}/planner/tasks': Operation<'/users/{user-id}/planner/tasks', 'get'>;
  'GET /users/{user-id}/planner/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /users/{user-id}/planner/tasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /users/{user-id}/planner/tasks': Operation<'/users/{user-id}/planner/tasks', 'post'>;
}

/**
 * `DELETE /users/{user-id}/planner/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/planner/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/tasks`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/planner/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/planner/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/planner/tasks']['body'],
  params?: IEndpoints['POST /users/{user-id}/planner/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/planner/tasks',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
