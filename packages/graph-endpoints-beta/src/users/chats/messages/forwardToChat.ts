import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/messages/forwardToChat': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/forwardToChat',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages/forwardToChat`
 *
 * Forward a chat message, a channel message, or a channel message reply to a chat.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/forwardToChat']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/forwardToChat']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/forwardToChat']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages/forwardToChat',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
