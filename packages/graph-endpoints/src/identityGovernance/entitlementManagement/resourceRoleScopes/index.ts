export * as role from './role';
export * as scope from './scope';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/resourceRoleScopes': Operation<
    '/identityGovernance/entitlementManagement/resourceRoleScopes',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope-id}',
    paramDefs: {
      path: ['accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/resourceRoleScopes`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/resourceRoleScopes']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/resourceRoleScopes',
    body,
  };
}
