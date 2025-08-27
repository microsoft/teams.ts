import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'get'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'patch'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'checklistItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
 *
 * A collection of smaller subtasks linked to the more complex parent task.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
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
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
 *
 * A collection of smaller subtasks linked to the more complex parent task.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'checklistItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'checklistItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['body'],
  params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
