export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/me/chats/{chat-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/members': Operation<'/me/chats/{chat-id}/members', 'get'>;
  'GET /me/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/me/chats/{chat-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/me/chats/{chat-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/members': Operation<'/me/chats/{chat-id}/members', 'post'>;
}

/**
 * `DELETE /me/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/members`
 *
 * List all conversation members in a chat. This method supports federation. For one-on-one chats, at least one chat member must belong to the tenant the request initiates from. For group chats, the chat must be initiated by a user in the tenant the request initiates from.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/members']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/members',
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
 * `GET /me/chats/{chat-id}/members/{conversationMember-id}`
 *
 * A collection of all the members in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/members']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/members']['response']> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/members',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
