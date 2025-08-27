import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getReportFilters': Operation<
    '/deviceManagement/reports/getReportFilters',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getReportFilters`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getReportFilters']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getReportFilters']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getReportFilters']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getReportFilters',
    paramDefs: [],
    params,
    body,
  };
}
