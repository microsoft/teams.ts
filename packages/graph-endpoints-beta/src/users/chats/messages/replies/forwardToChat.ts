import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat`
 *
 * Forward a chat message, a channel message, or a channel message reply to a chat.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
