export * as accessPackageResource from './apResource';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole`
 *
 * Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceRole',
    paramDefs: {
      path: ['accessPackage-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
