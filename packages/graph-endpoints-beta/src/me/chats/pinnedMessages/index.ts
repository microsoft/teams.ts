export * as message from './message';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/pinnedMessages': Operation<'/me/chats/{chat-id}/pinnedMessages', 'get'>;
  'GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/pinnedMessages': Operation<
    '/me/chats/{chat-id}/pinnedMessages',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/pinnedMessages`
 *
 * A collection of all the pinned messages in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/pinnedMessages']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/pinnedMessages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/pinnedMessages',
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
 * `GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 * A collection of all the pinned messages in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
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
 * `PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/pinnedMessages`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/pinnedMessages']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/pinnedMessages']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/pinnedMessages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/pinnedMessages',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
