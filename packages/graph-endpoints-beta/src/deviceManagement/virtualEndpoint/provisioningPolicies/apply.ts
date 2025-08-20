import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply`
 *
 * Apply the current provisioning policy configuration to all Cloud PC devices under a specified policy. Currently, the region is the only policy setting that you can apply.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/apply',
    paramDefs: [{ name: 'cloudPcProvisioningPolicy-id', in: 'path' }],
    params,
    body,
  };
}
