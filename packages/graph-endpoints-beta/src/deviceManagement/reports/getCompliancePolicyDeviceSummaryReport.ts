import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyDeviceSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getCompliancePolicyDeviceSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
