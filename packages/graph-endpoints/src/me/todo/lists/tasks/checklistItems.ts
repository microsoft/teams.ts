import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'get'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    'patch'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    'post'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
 *
 * Delete a checklistItem object.
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'checklistItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
 *
 * Get the checklistItem resources associated to a todoTask from the checklistItems navigation property.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
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
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
 *
 * Read the properties and relationships of a checklistItem object.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'checklistItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}`
 *
 * Update the properties of a checklistItem object.
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems/{checklistItem-id}',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'checklistItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems`
 *
 * Create a new checklistItem object.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['body'],
  params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems']['response']
> {
  return {
    method: 'post',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/checklistItems',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
