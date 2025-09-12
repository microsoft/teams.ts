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
  'GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message': Operation<
    '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
    'get'
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
    method: 'delete',
    path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'pinnedChatMessageInfo-id'],
    },
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
    method: 'get',
    path: '/me/chats/{chat-id}/pinnedMessages',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    method: 'get',
    path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: {
      path: ['chat-id', 'pinnedChatMessageInfo-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: {
      path: ['chat-id', 'pinnedChatMessageInfo-id'],
    },
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
    method: 'post',
    path: '/me/chats/{chat-id}/pinnedMessages',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const message = {
  /**
   * `GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
   *
   * Represents details about the chat message that is pinned.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['response']
  > {
    return {
      method: 'get',
      path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'pinnedChatMessageInfo-id'],
      },
      params,
    };
  },
};
