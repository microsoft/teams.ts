import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/removeAllAccessForUser': Operation<
    '/chats/{chat-id}/removeAllAccessForUser',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/removeAllAccessForUser`
 *
 * Remove access to a chat for a user.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/removeAllAccessForUser']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/removeAllAccessForUser']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/removeAllAccessForUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/removeAllAccessForUser',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
