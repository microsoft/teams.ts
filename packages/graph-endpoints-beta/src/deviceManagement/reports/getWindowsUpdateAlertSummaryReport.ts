import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport': Operation<
    '/deviceManagement/reports/getWindowsUpdateAlertSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getWindowsUpdateAlertSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
