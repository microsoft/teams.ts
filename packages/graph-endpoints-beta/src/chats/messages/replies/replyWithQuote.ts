import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote']['parameters']
): EndpointRequest<
  IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
