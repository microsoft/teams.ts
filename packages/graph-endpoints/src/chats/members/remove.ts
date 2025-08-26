import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/members/remove': Operation<'/chats/{chat-id}/members/remove', 'post'>;
}

/**
 * `POST /chats/{chat-id}/members/remove`
 *
 * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/members/remove']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/members/remove']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/members/remove']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/members/remove',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
