import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    'delete'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
    'get'
  >;
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    'patch'
  >;
  'POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions`
 *
 * The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
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
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
    body,
  };
}
