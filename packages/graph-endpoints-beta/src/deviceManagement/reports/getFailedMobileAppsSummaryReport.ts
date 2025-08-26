import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getFailedMobileAppsSummaryReport': Operation<
    '/deviceManagement/reports/getFailedMobileAppsSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getFailedMobileAppsSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getFailedMobileAppsSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
