import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceCompliancePolicies/refreshDeviceComplianceReportSummarization': Operation<
    '/deviceManagement/deviceCompliancePolicies/refreshDeviceComplianceReportSummarization',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/refreshDeviceComplianceReportSummarization`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/refreshDeviceComplianceReportSummarization']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/refreshDeviceComplianceReportSummarization']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/refreshDeviceComplianceReportSummarization']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/refreshDeviceComplianceReportSummarization',
    paramDefs: [],
    params,
    body,
  };
}
