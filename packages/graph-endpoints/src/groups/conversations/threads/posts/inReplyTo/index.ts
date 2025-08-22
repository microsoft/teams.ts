export * as attachments from './attachments';
export * as extensions from './extensions';
export * as forward from './forward';
export * as reply from './reply';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo`
 *
 * Read-only. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo',
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
