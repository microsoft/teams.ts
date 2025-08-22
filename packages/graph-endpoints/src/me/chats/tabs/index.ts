export * as teamsApp from './teamsApp';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
