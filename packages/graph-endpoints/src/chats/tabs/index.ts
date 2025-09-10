import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/chats/{chat-id}/tabs/{teamsTab-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/tabs': Operation<'/chats/{chat-id}/tabs', 'get'>;
  'GET /chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/chats/{chat-id}/tabs/{teamsTab-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/tabs/{teamsTab-id}': Operation<
    '/chats/{chat-id}/tabs/{teamsTab-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/tabs': Operation<'/chats/{chat-id}/tabs', 'post'>;
  'GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `DELETE /chats/{chat-id}/tabs/{teamsTab-id}`
 *
 * Remove (unpin) a tab from the specified chat.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /chats/{chat-id}/tabs/{teamsTab-id}']['response']> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'teamsTab-id'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/tabs`
 *
 * Retrieve the list of tabs in the specified chat.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/tabs']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/tabs',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/tabs/{teamsTab-id}`
 *
 * Retrieve the properties and relationships of the specified tab in a chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['chat-id', 'teamsTab-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /chats/{chat-id}/tabs/{teamsTab-id}`
  *
  * Update the properties of the specified tab in a chat. 
This can be used to configure the content of the tab.
  */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/tabs/{teamsTab-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/tabs/{teamsTab-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /chats/{chat-id}/tabs/{teamsTab-id}']['response']> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/tabs/{teamsTab-id}',
    paramDefs: {
      path: ['chat-id', 'teamsTab-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /chats/{chat-id}/tabs`
  *
  * Add (pin) a tab to the specified chat. 
The corresponding app must already be installed in the chat.
  */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/tabs']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/tabs']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/tabs']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/tabs',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
   *
   * The application that is linked to the tab. This can&#x27;t be changed after tab creation.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
  ): EndpointRequest<IEndpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['response']> {
    return {
      method: 'get',
      path: '/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'teamsTab-id'],
      },
      params,
    };
  },
};
