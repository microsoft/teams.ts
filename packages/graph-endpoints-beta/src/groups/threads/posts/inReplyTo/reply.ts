import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/reply',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
    body,
  };
}
