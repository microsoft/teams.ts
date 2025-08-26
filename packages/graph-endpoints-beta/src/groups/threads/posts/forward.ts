import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward',
    'post'
  >;
}

/**
  * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward`
  *
  * Forward a post to a recipient. You can specify both the parent conversation and thread in the request, 
or, you can specify just the parent thread without the parent conversation. 
  */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/forward',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
    body,
  };
}
