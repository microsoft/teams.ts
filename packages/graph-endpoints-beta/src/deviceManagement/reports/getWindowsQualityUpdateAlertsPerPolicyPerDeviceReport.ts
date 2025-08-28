import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport': Operation<
    '/deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport',
    paramDefs: [],
    params,
    body,
  };
}
