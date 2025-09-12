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
  'POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession': Operation<
    '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['todoTaskList-id', 'todoTask-id', 'attachmentBase-id'],
    },
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
    paramDefs: {
      path: ['todoTaskList-id', 'todoTask-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['todoTaskList-id', 'todoTask-id', 'attachmentBase-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['todoTaskList-id', 'todoTask-id'],
    },
    params,
    body,
  };
}

export const createUploadSession = {
  /**
   * `POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession`
   *
   * Create an upload session to iteratively upload ranges of a file as an attachment to a todoTask. As part of the response, this action returns an upload URL that you can use in subsequent sequential PUT queries. The request headers for each PUT operation let you specify the exact range of bytes to be uploaded. This allows the transfer to be resumed, in case the network connection is dropped during the upload. The following are the steps to attach a file to a Microsoft To Do task using an upload session: For an example that describes the end-to-end attachment process, see attach files to a To Do task.
   */
  create: function create(
    body: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession']['body'],
    params?: IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/todo/lists/{todoTaskList-id}/tasks/{todoTask-id}/attachments/createUploadSession',
      paramDefs: {
        path: ['todoTaskList-id', 'todoTask-id'],
      },
      params,
      body,
    };
  },
};
