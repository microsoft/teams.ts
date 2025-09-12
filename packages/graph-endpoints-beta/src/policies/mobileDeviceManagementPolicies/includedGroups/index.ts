import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups',
    'get'
  >;
  'GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups`
 *
 * Get the list of groups that are included in a mobile device management policy.
 */
export function list(
  params?: IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups',
    paramDefs: {
      path: ['mobileDeviceManagementPolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   */
  list: function list(
    params?: IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mobileDeviceManagementPolicy-id', 'group-id'],
      },
      params,
    };
  },
};
