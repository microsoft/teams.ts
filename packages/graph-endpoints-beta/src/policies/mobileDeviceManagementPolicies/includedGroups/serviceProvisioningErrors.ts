import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from a group object.
 */
export function list(
  params?: IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobilityManagementPolicy-id', in: 'path' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
