export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/chats/{chat-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/members': Operation<'/chats/{chat-id}/members', 'get'>;
  'GET /chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/chats/{chat-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/members/{conversationMember-id}': Operation<
    '/chats/{chat-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/members': Operation<'/chats/{chat-id}/members', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}/members/{conversationMember-id}`
 *
 * Remove a conversationMember from a chat.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/members`
 *
 * List all conversation members in a chat or channel.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/members']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/members',
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
 * `GET /chats/{chat-id}/members/{conversationMember-id}`
 *
 * Retrieve a conversationMember from a chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/members/{conversationMember-id}']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/members/{conversationMember-id}',
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
 * `PATCH /chats/{chat-id}/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /chats/{chat-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/members`
 *
 * Add a conversationMember to a chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/members']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/members']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/members',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
