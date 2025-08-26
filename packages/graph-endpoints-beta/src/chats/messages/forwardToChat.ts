import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/messages/forwardToChat': Operation<
    '/chats/{chat-id}/messages/forwardToChat',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/messages/forwardToChat`
 *
 * Forward a chat message, a channel message, or a channel message reply to a chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages/forwardToChat']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages/forwardToChat']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/messages/forwardToChat']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/messages/forwardToChat',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
