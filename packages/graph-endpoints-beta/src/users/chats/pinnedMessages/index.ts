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
  'GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
    'get'
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
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'chat-id', 'pinnedChatMessageInfo-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages',
    paramDefs: {
      path: ['user-id', 'chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'pinnedChatMessageInfo-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'pinnedChatMessageInfo-id'],
    },
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
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/pinnedMessages',
    paramDefs: {
      path: ['user-id', 'chat-id'],
    },
    params,
    body,
  };
}

export const message = {
  /**
   * `GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
   *
   * Represents details about the chat message that is pinned.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'chat-id', 'pinnedChatMessageInfo-id'],
      },
      params,
    };
  },
};
