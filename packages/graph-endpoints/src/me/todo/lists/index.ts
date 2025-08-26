export * as extensions from './extensions';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}',
    'delete'
  >;
  'GET /me/todo/lists': Operation<'/me/todo/lists', 'get'>;
  'GET /me/todo/lists/{todoTaskList-id}': Operation<'/me/todo/lists/{todoTaskList-id}', 'get'>;
  'PATCH /me/todo/lists/{todoTaskList-id}': Operation<'/me/todo/lists/{todoTaskList-id}', 'patch'>;
  'POST /me/todo/lists': Operation<'/me/todo/lists', 'post'>;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}`
 *
 * Deletes a todoTaskList object.
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists`
 *
 * Get a list of the todoTaskList objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo/lists']['response']> {
  return {
    method: 'get',
    path: '/me/todo/lists',
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
 * `GET /me/todo/lists/{todoTaskList-id}`
 *
 * Read the properties and relationships of a todoTaskList object.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/todo/lists/{todoTaskList-id}']['response']> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}`
 *
 * Update the properties of a todoTaskList object.
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}',
    paramDefs: [{ name: 'todoTaskList-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/todo/lists`
 *
 * Create a new lists object.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists']['body'],
  params?: IEndpoints['POST /me/todo/lists']['parameters']
): EndpointRequest<IEndpoints['POST /me/todo/lists']['response']> {
  return {
    method: 'post',
    path: '/me/todo/lists',
    paramDefs: [],
    params,
    body,
  };
}
