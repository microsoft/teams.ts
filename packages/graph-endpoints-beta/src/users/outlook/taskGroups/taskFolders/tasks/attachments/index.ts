export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}': Operation<
    '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments': Operation<
    '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments',
    'get'
  >;
  'GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}': Operation<
    '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments': Operation<
    '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskGroup-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments`
 *
 * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments',
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
      { name: 'outlookTaskGroup-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}`
 *
 * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskGroup-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments']['body'],
  params?: IEndpoints['POST /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/outlook/taskGroups/{outlookTaskGroup-id}/taskFolders/{outlookTaskFolder-id}/tasks/{outlookTask-id}/attachments',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'outlookTaskGroup-id', in: 'path' },
      { name: 'outlookTaskFolder-id', in: 'path' },
      { name: 'outlookTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
