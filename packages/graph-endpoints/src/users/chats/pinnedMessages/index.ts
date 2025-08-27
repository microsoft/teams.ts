export * as message from './message';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/pinnedMessages': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/pinnedMessages': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/pinnedMessages`
 *
 * A collection of all the pinned messages in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages',
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
 * `GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 * A collection of all the pinned messages in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/pinnedMessages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/pinnedMessages']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/pinnedMessages']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/pinnedMessages']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
