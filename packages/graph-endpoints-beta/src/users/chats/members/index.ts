export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/members': Operation<
    '/users/{user-id}/chats/{chat-id}/members',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/members': Operation<
    '/users/{user-id}/chats/{chat-id}/members',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/members`
 *
 * A collection of all the members in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/members',
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
 * `GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
 *
 * A collection of all the members in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/members',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
