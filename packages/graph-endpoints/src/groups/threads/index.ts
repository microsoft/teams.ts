export * as posts from './posts';
export * as reply from './reply';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}',
    'delete'
  >;
  'GET /groups/{group-id}/threads': Operation<'/groups/{group-id}/threads', 'get'>;
  'GET /groups/{group-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/threads/{conversationThread-id}': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}',
    'patch'
  >;
  'POST /groups/{group-id}/threads': Operation<'/groups/{group-id}/threads', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/threads/{conversationThread-id}`
 *
 * Delete conversationThread.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/threads/{conversationThread-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads`
 *
 * Get all the threads of a group.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/threads']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/threads']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}`
 *
 * Get a thread object.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/threads/{conversationThread-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/threads/{conversationThread-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/threads/{conversationThread-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
  * `POST /groups/{group-id}/threads`
  *
  * Start a new group conversation by first creating a thread. A new conversation, conversation thread, and post are created in the group.
Use reply thread or reply post to further post to that thread. Note: You can also start a new thread in an existing conversation.
  */
export function create(
  body: IEndpoints['POST /groups/{group-id}/threads']['body'],
  params?: IEndpoints['POST /groups/{group-id}/threads']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/threads']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/threads',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
