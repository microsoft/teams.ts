import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget']['body'],
  params?: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget',
    paramDefs: [
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
      { name: 'deviceManagementConfigurationPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}
