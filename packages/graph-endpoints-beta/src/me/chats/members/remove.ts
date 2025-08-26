import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/members/remove': Operation<
    '/me/chats/{chat-id}/members/remove',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/members/remove`
 *
 * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/members/remove']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/members/remove']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/members/remove']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/members/remove',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
