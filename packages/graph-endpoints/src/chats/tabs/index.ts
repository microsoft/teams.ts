export * as teamsApp from './teamsApp';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
