import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport': Operation<
    '/deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
