import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask`
 *
 * Set a scheduled auto-reprovision task to do automatic regular apply. Frontline shared only. Administrators only.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/schedulePolicyApplyTask',
    paramDefs: [{ name: 'cloudPcProvisioningPolicy-id', in: 'path' }],
    params,
    body,
  };
}
