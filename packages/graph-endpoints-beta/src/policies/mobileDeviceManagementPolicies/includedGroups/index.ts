export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups',
    'get'
  >;
}

/**
 * `GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups`
 *
 * Get the list of groups that are included in a mobile device management policy.
 */
export function list(
  params?: IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}/includedGroups',
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
    ],
    params,
  };
}
