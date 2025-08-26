import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport': Operation<
    '/deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport',
    paramDefs: [],
    params,
    body,
  };
}
