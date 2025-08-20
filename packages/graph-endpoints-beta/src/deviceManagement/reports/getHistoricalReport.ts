import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getHistoricalReport': Operation<
    '/deviceManagement/reports/getHistoricalReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getHistoricalReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getHistoricalReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getHistoricalReport']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getHistoricalReport']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getHistoricalReport',
    paramDefs: [],
    params,
    body,
  };
}
