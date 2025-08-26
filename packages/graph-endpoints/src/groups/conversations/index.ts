export * as threads from './threads';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/conversations/{conversation-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/conversations': Operation<'/groups/{group-id}/conversations', 'get'>;
  'GET /groups/{group-id}/conversations/{conversation-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}',
    'get'
  >;
  'POST /groups/{group-id}/conversations': Operation<'/groups/{group-id}/conversations', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/conversations/{conversation-id}`
 *
 * Delete conversation.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/conversations/{conversation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations`
 *
 * Retrieve the list of conversations in this group.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/conversations']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/conversations']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/conversations',
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
 * `GET /groups/{group-id}/conversations/{conversation-id}`
 *
 * The group&#x27;s conversations.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /groups/{group-id}/conversations`
 *
 * Use reply thread or reply post to further post to that conversation.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/conversations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/conversations']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/conversations']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/conversations',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
