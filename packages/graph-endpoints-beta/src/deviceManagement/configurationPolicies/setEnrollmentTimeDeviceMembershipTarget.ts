import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
}

/**
 * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget',
    paramDefs: [{ name: 'deviceManagementConfigurationPolicy-id', in: 'path' }],
    params,
    body,
  };
}
