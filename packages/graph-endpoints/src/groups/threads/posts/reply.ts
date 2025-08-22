import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/reply',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
    body,
  };
}
