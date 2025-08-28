import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies',
    'post'
  >;
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/importOffice365DeviceConfigurationPolicies',
    paramDefs: [{ name: 'deviceManagementTemplate-id', in: 'path' }],
    params,
    body,
  };
}
