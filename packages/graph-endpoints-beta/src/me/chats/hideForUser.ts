import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/hideForUser': Operation<'/me/chats/{chat-id}/hideForUser', 'post'>;
}

/**
 * `POST /me/chats/{chat-id}/hideForUser`
 *
 * Hide a chat for a user.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/hideForUser']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/hideForUser']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/hideForUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/hideForUser',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
