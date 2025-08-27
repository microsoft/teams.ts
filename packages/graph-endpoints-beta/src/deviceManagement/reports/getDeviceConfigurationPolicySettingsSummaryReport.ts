import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport': Operation<
    '/deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
