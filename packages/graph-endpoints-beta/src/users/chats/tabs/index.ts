export * as teamsApp from './teamsApp';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/tabs': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/tabs': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/tabs`
 *
 * A collection of all the tabs in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/tabs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/tabs',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
