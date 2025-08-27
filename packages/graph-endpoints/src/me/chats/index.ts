export * as hideForUser from './hideForUser';
export * as installedApps from './installedApps';
export * as lastMessagePreview from './lastMessagePreview';
export * as markChatReadForUser from './markChatReadForUser';
export * as markChatUnreadForUser from './markChatUnreadForUser';
export * as members from './members';
export * as messages from './messages';
export * as permissionGrants from './permissionGrants';
export * as pinnedMessages from './pinnedMessages';
export * as sendActivityNotification from './sendActivityNotification';
export * as tabs from './tabs';
export * as unhideForUser from './unhideForUser';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'delete'>;
  'GET /me/chats': Operation<'/me/chats', 'get'>;
  'GET /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'get'>;
  'PATCH /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'patch'>;
  'POST /me/chats': Operation<'/me/chats', 'post'>;
}

/**
 * `DELETE /me/chats/{chat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/chats/{chat-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats`
 *
 */
export function list(
  params?: IEndpoints['GET /me/chats']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats']['response']> {
  return {
    method: 'get',
    path: '/me/chats',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/chats/{chat-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/chats`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats']['body'],
  params?: IEndpoints['POST /me/chats']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats']['response']> {
  return {
    method: 'post',
    path: '/me/chats',
    paramDefs: [],
    params,
    body,
  };
}
