import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getAppStatusOverviewReport': Operation<
    '/deviceManagement/reports/getAppStatusOverviewReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getAppStatusOverviewReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getAppStatusOverviewReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getAppStatusOverviewReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getAppStatusOverviewReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getAppStatusOverviewReport',
    paramDefs: [],
    params,
    body,
  };
}
