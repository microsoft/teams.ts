import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups`
 *
 * The groups whose members are ineligible to be assigned this access package.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups',
    paramDefs: {
      path: ['accessPackageAssignment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups/{group-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackage/incompatibleGroups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackageAssignment-id', 'group-id'],
      },
      params,
    };
  },
};
