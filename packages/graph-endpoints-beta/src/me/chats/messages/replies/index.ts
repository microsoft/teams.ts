export * as forwardToChat from './forwardToChat';
export * as hostedContents from './hostedContents';
export * as replyWithQuote from './replyWithQuote';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
    'get'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
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
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
