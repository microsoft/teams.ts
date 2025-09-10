import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups`
 *
 * Retrieve a list of the group objects marked as incompatible on an accessPackage.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups',
    paramDefs: {
      path: ['accessPackage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups/{group-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackages/{accessPackage-id}/incompatibleGroups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessPackage-id', 'group-id'],
      },
      params,
    };
  },
};
