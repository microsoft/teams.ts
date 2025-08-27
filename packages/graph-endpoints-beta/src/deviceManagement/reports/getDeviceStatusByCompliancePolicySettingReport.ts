import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport': Operation<
    '/deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport',
    paramDefs: [],
    params,
    body,
  };
}
