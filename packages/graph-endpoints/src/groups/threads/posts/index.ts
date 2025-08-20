export * as attachments from './attachments';
export * as extensions from './extensions';
export * as forward from './forward';
export * as inReplyTo from './inReplyTo';
export * as reply from './reply';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts',
    'get'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}',
    'get'
  >;
}

/**
  * `GET /groups/{group-id}/threads/{conversationThread-id}/posts`
  *
  * Get the properties and relationships of a post in a specified thread. You can specify both the parent 
conversation and the thread, or, you can specify the thread without referencing the parent conversation. Since the post resource supports extensions, you can also use the GET operation to get custom properties and extension data in a post instance.
  */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts',
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
      { name: 'conversationThread-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
  };
}
