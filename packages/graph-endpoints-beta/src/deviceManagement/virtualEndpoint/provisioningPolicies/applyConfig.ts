import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig`
 *
 * Update the provisioning policy configuration for a set of Cloud PC devices by their IDs. This method supports retry and allows you to apply the configuration to a subset of Cloud PCs initially to test.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/applyConfig',
    paramDefs: [],
    params,
    body,
  };
}
