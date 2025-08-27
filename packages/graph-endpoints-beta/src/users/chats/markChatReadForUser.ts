import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/markChatReadForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/markChatReadForUser',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/markChatReadForUser`
 *
 * Mark a chat as read for a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/markChatReadForUser',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
