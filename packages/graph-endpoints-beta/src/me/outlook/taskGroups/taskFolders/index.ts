export * as permanentDelete from './permanentDelete';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    'delete'
  >;
  'GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    'get'
  >;
  'GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    'get'
  >;
  'PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    'patch'
  >;
  'POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders': Operation<
    '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    'post'
  >;
}

/**
 * `DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outlookTaskGroup-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders`
 *
 * Get Outlook task folders in a specific outlookTaskGroup.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTaskGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}`
 *
 * The collection of task folders in the task group. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTaskGroup-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}',
    paramDefs: [
      { name: 'outlookTaskGroup-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders`
 *
 * Create an Outlook task folder under a specified outlookTaskGroup.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['body'],
  params?: IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders',
    paramDefs: [{ name: 'outlookTaskGroup-id', in: 'path' }],
    params,
    body,
  };
}
