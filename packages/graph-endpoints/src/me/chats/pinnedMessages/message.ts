import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message': Operation<
    '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
    'get'
  >;
}

/**
 * `GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
 *
 * Represents details about the chat message that is pinned.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['response']
> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
  };
}
