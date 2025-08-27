import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
    'delete'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
    'get'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
    'get'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'mention-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
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
      { name: 'post-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'mention-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/mentions',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
    body,
  };
}
