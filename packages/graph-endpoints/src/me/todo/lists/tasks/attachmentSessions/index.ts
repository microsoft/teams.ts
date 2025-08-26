export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions',
    'get'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}',
    'get'
  >;
  'PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}',
    'patch'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'attachmentSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions`
 *
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions']['response']
> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions',
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
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'attachmentSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}']['body'],
  params?: IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachmentSessions/{attachmentSession-id}',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'attachmentSession-id', in: 'path' },
    ],
    params,
    body,
  };
}
