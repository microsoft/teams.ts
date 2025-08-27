import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
}

/**
 * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget',
    paramDefs: [{ name: 'deviceManagementConfigurationPolicy-id', in: 'path' }],
    params,
    body,
  };
}
