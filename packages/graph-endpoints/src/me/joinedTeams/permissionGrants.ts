import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/permissionGrants': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/permissionGrants': Operation<
    '/me/joinedTeams/{team-id}/permissionGrants',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/permissionGrants`
 *
 * A collection of permissions granted to apps to access the team.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/permissionGrants',
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
 * `GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 * A collection of permissions granted to apps to access the team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
 * `PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'resourceSpecificPermissionGrant-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/permissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/permissionGrants']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/permissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/permissionGrants']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/permissionGrants',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
