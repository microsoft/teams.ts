import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies': Operation<
    '/deviceManagement/templates/importOffice365DeviceConfigurationPolicies',
    'post'
  >;
}

/**
 * `POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/importOffice365DeviceConfigurationPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/importOffice365DeviceConfigurationPolicies',
    paramDefs: [],
    params,
    body,
  };
}
