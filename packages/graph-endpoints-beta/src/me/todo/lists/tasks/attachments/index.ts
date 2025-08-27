export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    'delete'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
    'get'
  >;
  'GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    'get'
  >;
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}`
 *
 * Delete a taskFileAttachment object from a todoTask resource.
 */
export function del(
  params?: IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'attachmentBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments`
 *
 * Get a list of the taskFileAttachment objects and their properties. The contentBytes property will not be returned in the response. Use the Get attachment API to view the contentBytes.
 */
export function list(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
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
 * `GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}`
 *
 * Read the properties and relationships of a taskFileAttachment object.
 */
export function get(
  params?: IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/{attachmentBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
      { name: 'attachmentBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments`
 *
 * Add a new taskFileAttachment object to a todoTask. This operation limits the size of the attachment you can add to under 3 MB. If the size of the file attachments is more than 3 MB, create an upload session to upload the attachments.
 */
export function create(
  body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['body'],
  params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments',
    paramDefs: [
      { name: 'todoTaskList-id', in: 'path' },
      { name: 'todoTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
