import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/extensions': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions',
    'get'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/extensions': Operation<
    '/me/todo/lists/{todoTaskList-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/extensions`
 *
 * The collection of open extensions defined for the task list. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions']['response']> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/extensions',
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
 * `GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the task list. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/todo/lists/{todoTaskList-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/extensions']['body'],
  params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /me/todo/lists/{todoTaskList-id}/extensions']['response']> {
  return {
    method: 'post',
    path: '/me/todo/lists/{todoTaskList-id}/extensions',
    paramDefs: [{ name: 'todoTaskList-id', in: 'path' }],
    params,
    body,
  };
}
