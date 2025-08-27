import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message': Operation<
    '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
    'get'
  >;
}

/**
 * `GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message`
 *
 * Represents details about the chat message that is pinned.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'pinnedChatMessageInfo-id', in: 'path' },
    ],
    params,
  };
}
