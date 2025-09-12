import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups': Operation<
    '/mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups',
    'get'
  >;
  'GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups`
 *
 * Microsoft Entra groups under the scope of the mobility management application if appliesTo is selected
 */
export function list(
  params?: IEndpoints['GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups',
    paramDefs: {
      path: ['mobilityManagementPolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

export const serviceProvisioningErrors = {
  /**
   * `GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
   */
  list: function list(
    params?: IEndpoints['GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['mobilityManagementPolicy-id', 'group-id'],
      },
      params,
    };
  },
};
