import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments',
    'get'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments',
    'post'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/createUploadSession': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/createUploadSession',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'conversationThread-id', 'post-id', 'attachment-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments`
 *
 * Retrieve a list of attachment objects attached to a post.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments',
    paramDefs: {
      path: ['group-id', 'conversationThread-id', 'post-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}`
 *
 * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}',
    paramDefs: {
      path: ['group-id', 'conversationThread-id', 'post-id', 'attachment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments',
    paramDefs: {
      path: ['group-id', 'conversationThread-id', 'post-id'],
    },
    params,
    body,
  };
}

export const createUploadSession = {
  /**
   * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/createUploadSession`
   *
   * Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that&#x27;s smaller than 3 MB, do a POST operation on the attachments navigation property of the Outlook item; see how to do this for a message or for an event. As part of the response, this action returns an upload URL that you can use in subsequent sequential PUT queries. Request headers for each PUT operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload. The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/createUploadSession']['body'],
    params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/createUploadSession']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/createUploadSession',
      paramDefs: {
        path: ['group-id', 'conversationThread-id', 'post-id'],
      },
      params,
      body,
    };
  },
};
