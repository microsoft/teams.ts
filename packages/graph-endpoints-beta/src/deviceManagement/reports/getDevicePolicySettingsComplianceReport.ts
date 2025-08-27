import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport': Operation<
    '/deviceManagement/reports/getDevicePolicySettingsComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDevicePolicySettingsComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
