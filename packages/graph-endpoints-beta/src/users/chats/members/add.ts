import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/chats/{chat-id}/members/add': Operation<
    '/users/{user-id}/chats/{chat-id}/members/add',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/members/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/add']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/add']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/members/add']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/members/add',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
