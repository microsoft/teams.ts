import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/messages/{message-id}/attachments/{attachment-id}': Operation<
    '/me/messages/{message-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /me/messages/{message-id}/attachments': Operation<
    '/me/messages/{message-id}/attachments',
    'get'
  >;
  'GET /me/messages/{message-id}/attachments/{attachment-id}': Operation<
    '/me/messages/{message-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /me/messages/{message-id}/attachments': Operation<
    '/me/messages/{message-id}/attachments',
    'post'
  >;
  'POST /me/messages/{message-id}/attachments/createUploadSession': Operation<
    '/me/messages/{message-id}/attachments/createUploadSession',
    'post'
  >;
}

/**
 * `DELETE /me/messages/{message-id}/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/messages/{message-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/messages/{message-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/messages/{message-id}/attachments/{attachment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['message-id', 'attachment-id'],
    },
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/attachments`
 *
 * Retrieve a list of attachment objects.
 */
export function list(
  params?: IEndpoints['GET /me/messages/{message-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['GET /me/messages/{message-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages/{message-id}/attachments',
    paramDefs: {
      path: ['message-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/messages/{message-id}/attachments/{attachment-id}`
 *
 * Read the properties, relationships, or raw contents of an attachment that is attached to a user event, message, Outlook task, or group post. An attachment can be one of the following types: All these types of attachments are derived from the attachment resource.
 */
export function get(
  params?: IEndpoints['GET /me/messages/{message-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/messages/{message-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/messages/{message-id}/attachments/{attachment-id}',
    paramDefs: {
      path: ['message-id', 'attachment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `POST /me/messages/{message-id}/attachments`
  *
  * Use this API to create a new Attachment. An attachment can be one of the following types: All these types of attachment resources are derived from the attachment
resource.
  */
export function create(
  body: IEndpoints['POST /me/messages/{message-id}/attachments']['body'],
  params?: IEndpoints['POST /me/messages/{message-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['POST /me/messages/{message-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/messages/{message-id}/attachments',
    paramDefs: {
      path: ['message-id'],
    },
    params,
    body,
  };
}

export const createUploadSession = {
  /**
   * `POST /me/messages/{message-id}/attachments/createUploadSession`
   *
   * Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that&#x27;s smaller than 3 MB, do a POST operation on the attachments navigation property of the Outlook item; see how to do this for a message or for an event. As part of the response, this action returns an upload URL that you can use in subsequent sequential PUT queries. Request headers for each PUT operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload. The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.
   */
  create: function create(
    body: IEndpoints['POST /me/messages/{message-id}/attachments/createUploadSession']['body'],
    params?: IEndpoints['POST /me/messages/{message-id}/attachments/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/messages/{message-id}/attachments/createUploadSession']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/messages/{message-id}/attachments/createUploadSession',
      paramDefs: {
        path: ['message-id'],
      },
      params,
      body,
    };
  },
};
