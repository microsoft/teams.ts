export * as completeMigration from './completeMigration';
export * as hideForUser from './hideForUser';
export * as installedApps from './installedApps';
export * as lastMessagePreview from './lastMessagePreview';
export * as markChatReadForUser from './markChatReadForUser';
export * as markChatUnreadForUser from './markChatUnreadForUser';
export * as members from './members';
export * as messages from './messages';
export * as operations from './operations';
export * as permissionGrants from './permissionGrants';
export * as pinnedMessages from './pinnedMessages';
export * as removeAllAccessForUser from './removeAllAccessForUser';
export * as sendActivityNotification from './sendActivityNotification';
export * as tabs from './tabs';
export * as unhideForUser from './unhideForUser';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}': Operation<'/chats/{chat-id}', 'delete'>;
  'GET /chats': Operation<'/chats', 'get'>;
  'GET /chats/{chat-id}': Operation<'/chats/{chat-id}', 'get'>;
  'PATCH /chats/{chat-id}': Operation<'/chats/{chat-id}', 'patch'>;
  'POST /chats': Operation<'/chats', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}`
 *
 * Soft-delete a chat. When invoked with delegated permissions, this operation only works for tenant admins and Teams service admins.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/chats/{chat-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats`
 *
 * Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.
 */
export function list(
  params?: IEndpoints['GET /chats']['parameters']
): EndpointRequest<IEndpoints['GET /chats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats',
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
 * `GET /chats/{chat-id}`
 *
 * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}`
 *
 * Update the properties of a chat object.
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/chats/{chat-id}',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /chats`
 *
 * Create a new chat object.
 */
export function create(
  body: IEndpoints['POST /chats']['body'],
  params?: IEndpoints['POST /chats']['parameters']
): EndpointRequest<IEndpoints['POST /chats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats',
    paramDefs: [],
    params,
    body,
  };
}
