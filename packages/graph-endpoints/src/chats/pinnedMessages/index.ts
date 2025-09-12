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
  'GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
    'get'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'pinnedChatMessageInfo-id'],
    },
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
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['chat-id', 'pinnedChatMessageInfo-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['chat-id', 'pinnedChatMessageInfo-id'],
    },
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
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const message = {
  /**
   * `GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
   *
   * Represents details about the chat message that is pinned.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['response']
  > {
    return {
      method: 'get',
      path: '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'pinnedChatMessageInfo-id'],
      },
      params,
    };
  },
};
