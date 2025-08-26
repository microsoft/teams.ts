export * as attachments from './attachments';
export * as complete from './complete';
export * as permanentDelete from './permanentDelete';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'delete'
  >;
  'GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'get'
  >;
  'GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'get'
  >;
  'PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    'patch'
  >;
  'POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks': Operation<
    '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
  *
  * Get all the Outlook tasks in the specified folder. By default, this operation (and the POST, PATCH, and complete task operations) returns
date-related properties in UTC.  You can use a Prefer: outlook.timezone request header to have all the date-related properties in the response represented in a time zone
different than UTC. See an example for getting a single task. You can apply the header similarly to get multiple tasks. If there is more than one task group, and you want to get all the tasks in a specific task group, first
get all the task folders in that task group,
and then get the tasks in each of these task folders.
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTaskFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * The tasks in this task folder. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['body'],
  params?: IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}',
    paramDefs: [
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
  * `POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks`
  *
  * Create an Outlook task in the specified task folder. The POST method always ignores the time portion of startDateTime and dueDateTime in the request body, and assumes the time 
to be always midnight in the specified time zone.
  * @deprecated
  */
export function create(
  body: IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['body'],
  params?: IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/outlook/taskFolders/{outlookTaskFolder-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/taskFolders/{outlookTaskFolder-id}/tasks',
    paramDefs: [{ name: 'outlookTaskFolder-id', in: 'path' }],
    params,
    body,
  };
}
