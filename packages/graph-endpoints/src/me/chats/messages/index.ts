export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/messages': Operation<'/me/chats/{chat-id}/messages', 'get'>;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/messages': Operation<'/me/chats/{chat-id}/messages', 'post'>;
}

/**
 * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages`
 *
 * A collection of all the messages in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/messages']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/messages',
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
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/messages']['response']> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/messages',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
