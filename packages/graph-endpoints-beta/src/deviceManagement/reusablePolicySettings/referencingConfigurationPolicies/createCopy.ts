import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy']['body'],
  params?: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy',
    paramDefs: [
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}
