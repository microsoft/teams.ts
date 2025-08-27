export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}',
    'delete'
  >;
  'GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments',
    'get'
  >;
  'GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}',
    'get'
  >;
  'POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments']['body'],
  params?: IEndpoints['POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
    body,
  };
}
