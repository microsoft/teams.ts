import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
