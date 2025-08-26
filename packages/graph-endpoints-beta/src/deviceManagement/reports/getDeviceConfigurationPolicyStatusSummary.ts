import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary': Operation<
    '/deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary',
    paramDefs: [],
    params,
    body,
  };
}
