export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/tasks/{plannerTask-id}': Operation<
    '/me/planner/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /me/planner/tasks': Operation<'/me/planner/tasks', 'get'>;
  'GET /me/planner/tasks/{plannerTask-id}': Operation<'/me/planner/tasks/{plannerTask-id}', 'get'>;
  'PATCH /me/planner/tasks/{plannerTask-id}': Operation<
    '/me/planner/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /me/planner/tasks': Operation<'/me/planner/tasks', 'post'>;
}

/**
 * `DELETE /me/planner/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/tasks`
 *
 * Retrieve a list of plannertask objects assigned to a User.
 */
export function list(
  params?: IEndpoints['GET /me/planner/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/tasks',
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
 * `GET /me/planner/tasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Returns the plannerTasks assigned to the user.
 */
export function get(
  params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner/tasks/{plannerTask-id}',
    paramDefs: [{ name: 'plannerTask-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/planner/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/tasks']['body'],
  params?: IEndpoints['POST /me/planner/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /me/planner/tasks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/planner/tasks',
    paramDefs: [],
    params,
    body,
  };
}
