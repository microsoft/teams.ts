import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/markChatReadForUser': Operation<
    '/chats/{chat-id}/markChatReadForUser',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/markChatReadForUser`
 *
 * Mark a chat as read for a user.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/markChatReadForUser']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/markChatReadForUser']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/markChatReadForUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/markChatReadForUser',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
