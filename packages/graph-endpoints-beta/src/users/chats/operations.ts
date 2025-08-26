import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/operations': Operation<
    '/users/{user-id}/chats/{chat-id}/operations',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/operations': Operation<
    '/users/{user-id}/chats/{chat-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/operations`
 *
 * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/operations',
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
 * `GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
 *
 * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/operations']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/operations',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
