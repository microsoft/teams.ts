import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/operations': Operation<'/me/chats/{chat-id}/operations', 'get'>;
  'GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/operations': Operation<'/me/chats/{chat-id}/operations', 'post'>;
}

/**
 * `DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/operations`
 *
 * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/operations',
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
 * `GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
 *
 * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAsyncOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/operations']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/operations',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
