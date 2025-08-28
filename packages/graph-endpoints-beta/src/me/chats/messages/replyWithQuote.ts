import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/messages/replyWithQuote': Operation<
    '/me/chats/{chat-id}/messages/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/messages/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages/replyWithQuote']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages/replyWithQuote']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/messages/replyWithQuote']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/messages/replyWithQuote',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
