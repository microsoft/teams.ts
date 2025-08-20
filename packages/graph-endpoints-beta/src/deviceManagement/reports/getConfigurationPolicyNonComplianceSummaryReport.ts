import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
