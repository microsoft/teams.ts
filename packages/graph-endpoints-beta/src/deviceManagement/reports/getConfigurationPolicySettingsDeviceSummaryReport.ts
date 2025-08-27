import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
