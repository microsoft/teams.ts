export * as permanentDelete from './permanentDelete';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    'delete'
  >;
  'GET /users/{user-id}/outlook/taskFolders': Operation<
    '/users/{user-id}/outlook/taskFolders',
    'get'
  >;
  'GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    'get'
  >;
  'PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}': Operation<
    '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    'patch'
  >;
  'POST /users/{user-id}/outlook/taskFolders': Operation<
    '/users/{user-id}/outlook/taskFolders',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskFolders`
 *
 * The user&#x27;s Outlook task folders. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook/taskFolders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders',
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
 * `GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * The user&#x27;s Outlook task folders. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/outlook/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/outlook/taskFolders`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskFolders']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskFolders']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/outlook/taskFolders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskFolders',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
