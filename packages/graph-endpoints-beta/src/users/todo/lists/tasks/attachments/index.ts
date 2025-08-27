export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    'delete'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
    'get'
  >;
  'GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    'get'
  >;
  'POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments': Operation<
    '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'attachmentBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments`
 *
 * A collection of file attachments for the task.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
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
 * `GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}`
 *
 * A collection of file attachments for the task.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'attachmentBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['body'],
  params?: IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
