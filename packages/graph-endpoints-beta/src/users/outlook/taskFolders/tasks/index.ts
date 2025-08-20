export * as attachments from './attachments';
export * as complete from './complete';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'delete'
  >;
  'GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'get'
  >;
  'GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'get'
  >;
  'PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'patch'
  >;
  'POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
 *
 * The tasks in this task folder. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
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
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * The tasks in this task folder. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}
