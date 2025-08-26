import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport': Operation<
    '/deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport',
    paramDefs: [],
    params,
    body,
  };
}
