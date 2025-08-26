import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/removeAllAccessForUser': Operation<
    '/me/chats/{chat-id}/removeAllAccessForUser',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/removeAllAccessForUser`
 *
 * Remove access to a chat for a user.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/removeAllAccessForUser']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/removeAllAccessForUser']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/removeAllAccessForUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/removeAllAccessForUser',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
