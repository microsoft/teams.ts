import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/members/add': Operation<'/chats/{chat-id}/members/add', 'post'>;
}

/**
 * `POST /chats/{chat-id}/members/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/members/add']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/members/add']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/members/add']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/members/add',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
