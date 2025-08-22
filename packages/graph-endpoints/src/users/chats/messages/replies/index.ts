export * as hostedContents from './hostedContents';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies',
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
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
