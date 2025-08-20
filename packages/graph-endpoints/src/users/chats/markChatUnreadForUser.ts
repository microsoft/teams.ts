import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/markChatUnreadForUser',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser`
 *
 * Mark a chat as unread for a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/markChatUnreadForUser',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
