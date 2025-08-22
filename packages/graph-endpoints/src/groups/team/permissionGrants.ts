import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/permissionGrants': Operation<
    '/groups/{group-id}/team/permissionGrants',
    'get'
  >;
  'GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/permissionGrants': Operation<
    '/groups/{group-id}/team/permissionGrants',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/permissionGrants`
 *
 * A collection of permissions granted to apps to access the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/permissionGrants']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/permissionGrants',
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
 * `GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 * A collection of permissions granted to apps to access the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
 * `PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/permissionGrants']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/permissionGrants']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/permissionGrants',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
