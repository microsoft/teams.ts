import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
 *
 * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}
