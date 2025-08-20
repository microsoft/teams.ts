import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/permissionGrants': Operation<'/chats/{chat-id}/permissionGrants', 'get'>;
  'GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/permissionGrants': Operation<'/chats/{chat-id}/permissionGrants', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/permissionGrants`
 *
 * List all resource-specific permission grants on the chat. This list specifies the Microsoft Entra apps that have access to the chat, along with the corresponding resource-specific access that each app has.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/permissionGrants',
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
 * `GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 * A collection of permissions granted to apps for the chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
 * `PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/permissionGrants']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/permissionGrants',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
