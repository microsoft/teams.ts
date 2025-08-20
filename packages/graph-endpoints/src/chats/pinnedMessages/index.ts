export * as message from './message';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/pinnedMessages': Operation<'/chats/{chat-id}/pinnedMessages', 'get'>;
  'GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/pinnedMessages': Operation<'/chats/{chat-id}/pinnedMessages', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 * Unpin a message from a chat.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/pinnedMessages`
 *
 * Get a list of pinnedChatMessages in a chat.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/pinnedMessages']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/pinnedMessages']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/pinnedMessages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 * A collection of all the pinned messages in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/pinnedMessages`
 *
 * Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/pinnedMessages']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/pinnedMessages']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/pinnedMessages']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/pinnedMessages',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
