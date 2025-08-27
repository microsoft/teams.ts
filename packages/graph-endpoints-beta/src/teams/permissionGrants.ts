import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /teams/{team-id}/permissionGrants': Operation<'/teams/{team-id}/permissionGrants', 'get'>;
  'GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /teams/{team-id}/permissionGrants': Operation<'/teams/{team-id}/permissionGrants', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/permissionGrants`
 *
 * List all resource-specific permission grants on the team. This list specifies the Microsoft Entra apps that have access to the team, along with the corresponding kind of resource-specific access that each app has.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/permissionGrants',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 * A collection of permissions granted to apps to access the team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/permissionGrants']['body'],
  params?: IEndpoints['POST /teams/{team-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/permissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/permissionGrants',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
