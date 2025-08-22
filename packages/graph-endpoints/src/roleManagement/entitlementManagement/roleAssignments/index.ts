export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments': Operation<
    '/roleManagement/entitlementManagement/roleAssignments',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignments': Operation<
    '/roleManagement/entitlementManagement/roleAssignments',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/entitlementManagement/roleAssignments`
  *
  * Get a list of unifiedRoleAssignment objects for the RBAC provider. The following RBAC providers are currently supported:
- directory (Microsoft Entra ID)
- entitlement management (Microsoft Entra entitlement management)
  */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignments',
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
 * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * Resource to grant access to users or groups.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignments`
 *
 * Create a new unifiedRoleAssignment object.
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignments']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
