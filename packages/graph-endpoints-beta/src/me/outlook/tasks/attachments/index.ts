import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /me/outlook/tasks/{outlookTask-id}/attachments': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments',
    'get'
  >;
  'GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /me/outlook/tasks/{outlookTask-id}/attachments': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments',
    'post'
  >;
  'POST /me/outlook/tasks/{outlookTask-id}/attachments/createUploadSession': Operation<
    '/me/outlook/tasks/{outlookTask-id}/attachments/createUploadSession',
    'post'
  >;
}

/**
 * `DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['outlookTask-id', 'attachment-id'],
    },
    params,
  };
}

/**
 * `GET /me/outlook/tasks/{outlookTask-id}/attachments`
 *
 * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task. Read-only. Nullable.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments',
    paramDefs: {
      path: ['outlookTask-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}`
 *
 * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the task. Read-only. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments/{attachment-id}',
    paramDefs: {
      path: ['outlookTask-id', 'attachment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /me/outlook/tasks/{outlookTask-id}/attachments`
 *
 * Use this API to add an attachment to an outlookTask. The attachment can be a file (of fileAttachment type) or Outlook item (itemAttachment type).
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments']['body'],
  params?: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/outlook/tasks/{outlookTask-id}/attachments',
    paramDefs: {
      path: ['outlookTask-id'],
    },
    params,
    body,
  };
}

export const createUploadSession = {
  /**
   * `POST /me/outlook/tasks/{outlookTask-id}/attachments/createUploadSession`
   *
   * Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that&#x27;s smaller than 3 MB, do a POST operation on the attachments navigation property of the Outlook item; see how to do this for a message or for an event. As part of the response, this action returns an upload URL that you can use in subsequent sequential PUT queries. Request headers for each PUT operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload. The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments/createUploadSession']['body'],
    params?: IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/outlook/tasks/{outlookTask-id}/attachments/createUploadSession']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/outlook/tasks/{outlookTask-id}/attachments/createUploadSession',
      paramDefs: {
        path: ['outlookTask-id'],
      },
      params,
      body,
    };
  },
};
