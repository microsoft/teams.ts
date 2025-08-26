import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/hideForUser': Operation<'/chats/{chat-id}/hideForUser', 'post'>;
}

/**
 * `POST /chats/{chat-id}/hideForUser`
 *
 * Hide a chat for a user.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/hideForUser']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/hideForUser']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/hideForUser']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/hideForUser',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
