import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport': Operation<
    '/deviceManagement/reports/getPolicyNonComplianceSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getPolicyNonComplianceSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
