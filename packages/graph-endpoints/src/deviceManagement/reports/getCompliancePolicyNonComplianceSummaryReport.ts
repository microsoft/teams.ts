import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
