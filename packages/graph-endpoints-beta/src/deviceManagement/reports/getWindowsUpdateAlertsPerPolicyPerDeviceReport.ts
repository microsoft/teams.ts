import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport': Operation<
    '/deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport',
    paramDefs: [],
    params,
    body,
  };
}
