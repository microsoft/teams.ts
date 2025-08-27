import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}/policy': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}/policy',
    'get'
  >;
}

/**
 * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}/policy`
 *
 * The navigation link to the WindowsDefenderApplicationControl supplemental policy.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}/policy']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}/policy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deviceStatuses/{windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id}/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
      {
        name: 'windowsDefenderApplicationControlSupplementalPolicyDeploymentStatus-id',
        in: 'path',
      },
    ],
    params,
  };
}
