import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice': Operation<
    '/deviceManagement/reports/getConfigurationPoliciesReportForDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationPoliciesReportForDevice',
    paramDefs: [],
    params,
    body,
  };
}
