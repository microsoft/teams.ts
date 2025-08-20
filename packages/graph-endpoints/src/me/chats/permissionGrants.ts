import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/permissionGrants': Operation<
    '/me/chats/{chat-id}/permissionGrants',
    'get'
  >;
  'GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/permissionGrants': Operation<
    '/me/chats/{chat-id}/permissionGrants',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/permissionGrants`
 *
 * A collection of permissions granted to apps for the chat.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/permissionGrants']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/permissionGrants',
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
 * `GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 * A collection of permissions granted to apps for the chat.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/permissionGrants']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/permissionGrants']['response']> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/permissionGrants',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
