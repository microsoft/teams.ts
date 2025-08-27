export * as attachmentSessions from './attachmentSessions';
export * as attachments from './attachments';
export * as checklistItems from './checklistItems';
export * as extensions from './extensions';
export * as linkedResources from './linkedResources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks',
    'get'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'patch'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * Delete a todoTask object.
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks`
 *
 * Get the todoTask resources from the tasks navigation property of a specified todoTaskList.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks']['response']> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * Read the properties and relationships of a todoTask object.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * Update the properties of a todoTask object.
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/todo/lists/{todoTaskList-id}/tasks`
 *
 * Create a new task object in a specified todoTaskList.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks']['body'],
  params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks']['response']> {
  return {
    method: 'post',
    path: '/me/todo/lists/{todoTaskList-id}/tasks',
    paramDefs: [{ name: 'todoTaskList-id', in: 'path' }],
    params,
    body,
  };
}
