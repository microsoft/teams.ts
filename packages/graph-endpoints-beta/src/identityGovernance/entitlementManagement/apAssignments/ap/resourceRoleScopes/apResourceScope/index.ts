export * as accessPackageResource from './apResource';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    'patch'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignment-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageResourceRoleScope-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/accessPackageResourceRoleScopes/{accessPackageResourceRoleScope-id}/accessPackageResourceScope',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageResourceRoleScope-id'],
    },
    params,
    body,
  };
}
