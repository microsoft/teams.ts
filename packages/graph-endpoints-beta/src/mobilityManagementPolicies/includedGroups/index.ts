export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups': Operation<
    '/mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups',
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
