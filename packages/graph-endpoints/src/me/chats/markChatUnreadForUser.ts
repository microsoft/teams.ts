import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/markChatUnreadForUser': Operation<
    '/me/chats/{chat-id}/markChatUnreadForUser',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/markChatUnreadForUser`
 *
 * Mark a chat as unread for a user.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/markChatUnreadForUser']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/markChatUnreadForUser']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/markChatUnreadForUser']['response']> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/markChatUnreadForUser',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
