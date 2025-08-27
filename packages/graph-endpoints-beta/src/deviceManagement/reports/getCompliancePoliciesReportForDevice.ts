import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getCompliancePoliciesReportForDevice': Operation<
    '/deviceManagement/reports/getCompliancePoliciesReportForDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getCompliancePoliciesReportForDevice`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getCompliancePoliciesReportForDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getCompliancePoliciesReportForDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getCompliancePoliciesReportForDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getCompliancePoliciesReportForDevice',
    paramDefs: [],
    params,
    body,
  };
}
