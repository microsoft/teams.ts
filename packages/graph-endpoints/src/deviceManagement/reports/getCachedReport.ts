import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getCachedReport': Operation<
    '/deviceManagement/reports/getCachedReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getCachedReport`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getCachedReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getCachedReport']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getCachedReport']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getCachedReport',
    paramDefs: [],
    params,
    body,
  };
}
