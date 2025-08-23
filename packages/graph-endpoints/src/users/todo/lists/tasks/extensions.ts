import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
    'get'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions`
 *
 * The collection of open extensions defined for the task. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
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
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the task. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['body'],
  params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/extensions',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
