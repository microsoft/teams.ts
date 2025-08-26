import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/messages/replyWithQuote': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/replyWithQuote']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/replyWithQuote']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages/replyWithQuote']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages/replyWithQuote',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
