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

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}': Operation<
    '/users/{user-id}/chats/{chat-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats': Operation<'/users/{user-id}/chats', 'get'>;
  'GET /users/{user-id}/chats/{chat-id}': Operation<'/users/{user-id}/chats/{chat-id}', 'get'>;
  'PATCH /users/{user-id}/chats/{chat-id}': Operation<'/users/{user-id}/chats/{chat-id}', 'patch'>;
  'POST /users/{user-id}/chats': Operation<'/users/{user-id}/chats', 'post'>;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats`
 *
 * Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}`
 *
 * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
