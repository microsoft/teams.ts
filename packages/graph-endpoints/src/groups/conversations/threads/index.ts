export * as posts from './posts';
export * as reply from './reply';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}',
    'delete'
  >;
  'GET /groups/{group-id}/conversations/{conversation-id}/threads': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads',
    'get'
  >;
  'GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}',
    'patch'
  >;
  'POST /groups/{group-id}/conversations/{conversation-id}/threads': Operation<
    '/groups/{group-id}/conversations/{conversation-id}/threads',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}/threads`
 *
 * Get all the threads in a group conversation. Note: You can also get all the threads of a group.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}`
 *
 * A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}',
    paramDefs: [
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
 * `PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
  * `POST /groups/{group-id}/conversations/{conversation-id}/threads`
  *
  * Create a new thread in the specified conversation.  A thread and post are created as specified. Use reply thread to further post 
to that thread. Or, if you get the post ID, you can also reply to that post in that thread. Note: You can also start a new conversation by first creating a thread.
  */
export function create(
  body: IEndpoints['POST /groups/{group-id}/conversations/{conversation-id}/threads']['body'],
  params?: IEndpoints['POST /groups/{group-id}/conversations/{conversation-id}/threads']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/conversations/{conversation-id}/threads']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/conversations/{conversation-id}/threads',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
    ],
    params,
    body,
  };
}
