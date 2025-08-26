export * as attachments from './attachments';
export * as extensions from './extensions';
export * as forward from './forward';
export * as inReplyTo from './inReplyTo';
export * as mentions from './mentions';
export * as reply from './reply';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts',
    'get'
  >;
  'GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}',
    'patch'
  >;
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}',
    paramDefs: [
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
 * `PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}',
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
