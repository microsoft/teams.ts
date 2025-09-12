import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/events/{event-id}/attachments/{attachment-id}': Operation<
    '/users/{user-id}/events/{event-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /users/{user-id}/events/{event-id}/attachments': Operation<
    '/users/{user-id}/events/{event-id}/attachments',
    'get'
  >;
  'GET /users/{user-id}/events/{event-id}/attachments/{attachment-id}': Operation<
    '/users/{user-id}/events/{event-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /users/{user-id}/events/{event-id}/attachments': Operation<
    '/users/{user-id}/events/{event-id}/attachments',
    'post'
  >;
  'POST /users/{user-id}/events/{event-id}/attachments/createUploadSession': Operation<
    '/users/{user-id}/events/{event-id}/attachments/createUploadSession',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/events/{event-id}/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/events/{event-id}/attachments/{attachment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'event-id', 'attachment-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/events/{event-id}/attachments`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/events/{event-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/events/{event-id}/attachments']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/events/{event-id}/attachments',
    paramDefs: {
      path: ['user-id', 'event-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/events/{event-id}/attachments/{attachment-id}`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/events/{event-id}/attachments/{attachment-id}',
    paramDefs: {
      path: ['user-id', 'event-id', 'attachment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /users/{user-id}/events/{event-id}/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/events/{event-id}/attachments']['body'],
  params?: IEndpoints['POST /users/{user-id}/events/{event-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/events/{event-id}/attachments']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/events/{event-id}/attachments',
    paramDefs: {
      path: ['user-id', 'event-id'],
    },
    params,
    body,
  };
}

export const createUploadSession = {
  /**
   * `POST /users/{user-id}/events/{event-id}/attachments/createUploadSession`
   *
   * Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to the specified Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that&#x27;s smaller than 3 MB, do a POST operation on the attachments navigation property of the Outlook item; see how to do this for a message or for an event. As part of the response, this action returns an upload URL that you can use in subsequent sequential PUT queries. Request headers for each PUT operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload. The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/events/{event-id}/attachments/createUploadSession']['body'],
    params?: IEndpoints['POST /users/{user-id}/events/{event-id}/attachments/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/events/{event-id}/attachments/createUploadSession']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/events/{event-id}/attachments/createUploadSession',
      paramDefs: {
        path: ['user-id', 'event-id'],
      },
      params,
      body,
    };
  },
};
