import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/unhideForUser': Operation<'/me/chats/{chat-id}/unhideForUser', 'post'>;
}

/**
 * `POST /me/chats/{chat-id}/unhideForUser`
 *
 * Unhide a chat for a user.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/unhideForUser']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/unhideForUser']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/unhideForUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/unhideForUser',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
