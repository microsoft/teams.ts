import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /me/permissionGrants': Operation<'/me/permissionGrants', 'get'>;
  'GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /me/permissionGrants': Operation<'/me/permissionGrants', 'post'>;
}

/**
 * `DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/permissionGrants`
 *
 * List all resource-specific permission grants of a user.
 */
export function list(
  params?: IEndpoints['GET /me/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /me/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/permissionGrants',
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
 * `GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 * List all resource-specific permission grants of a user.
 */
export function get(
  params?: IEndpoints['GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [{ name: 'resourceSpecificPermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /me/permissionGrants']['body'],
  params?: IEndpoints['POST /me/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /me/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/permissionGrants',
    paramDefs: [],
    params,
    body,
  };
}
