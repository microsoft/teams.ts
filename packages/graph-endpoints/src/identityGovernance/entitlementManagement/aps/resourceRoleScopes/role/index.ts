export * as resource from './resource';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/resourceRoleScopes/{accessPackageResourceRoleScope-id}/role',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
