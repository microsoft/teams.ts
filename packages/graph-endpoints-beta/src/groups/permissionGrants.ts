import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /groups/{group-id}/permissionGrants': Operation<
    '/groups/{group-id}/permissionGrants',
    'get'
  >;
  'GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /groups/{group-id}/permissionGrants': Operation<
    '/groups/{group-id}/permissionGrants',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/permissionGrants`
 *
 * List all resource-specific permission grants on a group. This list specifies the Microsoft Entra apps that have access to the group, along with the corresponding kind of resource-specific access that each app has.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/permissionGrants',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 * The permissions granted for a group to a specific application. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/permissionGrants']['body'],
  params?: IEndpoints['POST /groups/{group-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/permissionGrants',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
