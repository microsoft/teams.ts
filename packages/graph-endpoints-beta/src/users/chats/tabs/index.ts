import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/tabs': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/tabs': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs',
    'post'
  >;
  'GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'chat-id', 'teamsTab-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/tabs`
 *
 * A collection of all the tabs in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/tabs',
    paramDefs: {
      path: ['user-id', 'chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'teamsTab-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'teamsTab-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/tabs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/tabs',
    paramDefs: {
      path: ['user-id', 'chat-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'chat-id', 'teamsTab-id'],
      },
      params,
    };
  },
};
