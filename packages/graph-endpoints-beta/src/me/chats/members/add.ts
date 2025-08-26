import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/members/add': Operation<'/me/chats/{chat-id}/members/add', 'post'>;
}

/**
 * `POST /me/chats/{chat-id}/members/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/members/add']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/members/add']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/members/add']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/members/add',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
