export * as extensions from './extensions';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists': Operation<'/users/{user-id}/todo/lists', 'get'>;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}',
    'get'
  >;
  'PATCH /users/{user-id}/todo/lists/{todoTaskList-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}',
    'patch'
  >;
  'POST /users/{user-id}/todo/lists': Operation<'/users/{user-id}/todo/lists', 'post'>;
}

/**
 * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists`
 *
 * The task lists in the users mailbox.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/todo/lists']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/todo/lists']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists',
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
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}`
 *
 * The task lists in the users mailbox.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/todo/lists/{todoTaskList-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/todo/lists/{todoTaskList-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/todo/lists`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/todo/lists']['body'],
  params?: IEndpoints['POST /users/{user-id}/todo/lists']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/todo/lists']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/todo/lists',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
