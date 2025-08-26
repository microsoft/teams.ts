import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getAppsInstallSummaryReport': Operation<
    '/deviceManagement/reports/getAppsInstallSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getAppsInstallSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getAppsInstallSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getAppsInstallSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getAppsInstallSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getAppsInstallSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
