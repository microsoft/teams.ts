export * as taskFolders from './taskFolders';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}': Operation<
    '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}',
    'delete'
  >;
  'GET /users/{user-id}/outlook/taskGroups': Operation<
    '/users/{user-id}/outlook/taskGroups',
    'get'
  >;
  'GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}': Operation<
    '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}',
    'get'
  >;
  'PATCH /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}': Operation<
    '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}',
    'patch'
  >;
  'POST /users/{user-id}/outlook/taskGroups': Operation<
    '/users/{user-id}/outlook/taskGroups',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskGroups`
 *
 * The user&#x27;s Outlook task groups. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskGroups']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook/taskGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskGroups',
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
 * `GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}`
 *
 * The user&#x27;s Outlook task groups. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/outlook/taskGroups`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskGroups']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskGroups']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/outlook/taskGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskGroups',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
