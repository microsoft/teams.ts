import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/me/chats/{chat-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/tabs': Operation<'/me/chats/{chat-id}/tabs', 'get'>;
  'GET /me/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/me/chats/{chat-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/me/chats/{chat-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/tabs': Operation<'/me/chats/{chat-id}/tabs', 'post'>;
  'GET /me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'teamsTab-id'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/tabs`
 *
 * A collection of all the tabs in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/tabs']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/tabs',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 * A collection of all the tabs in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/tabs/{teamsTab-id}']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['chat-id', 'teamsTab-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['chat-id', 'teamsTab-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/tabs`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/tabs']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/tabs']['response']> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/tabs',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'teamsTab-id'],
      },
      params,
    };
  },
};
