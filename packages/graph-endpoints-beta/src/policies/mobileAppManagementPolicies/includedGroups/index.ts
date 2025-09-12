import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups': Operation<
    '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups',
    'get'
  >;
  'GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups`
 *
 * Get the list of groups that are included in a mobile app management policy.
 */
export function list(
  params?: IEndpoints['GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups',
    paramDefs: {
      path: ['mobileAppManagementPolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   */
  list: function list(
    params?: IEndpoints['GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mobileAppManagementPolicy-id', 'group-id'],
      },
      params,
    };
  },
};
