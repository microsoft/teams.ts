export * as attachmentSessions from './attachmentSessions';
export * as attachments from './attachments';
export * as checklistItems from './checklistItems';
export * as extensions from './extensions';
export * as linkedResources from './linkedResources';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
    'get'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    'patch'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks`
 *
 * The tasks in this task list. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
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
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 * The tasks in this task list. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['body'],
  params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
    body,
  };
}
