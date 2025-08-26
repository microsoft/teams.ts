import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport': Operation<
    '/deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
