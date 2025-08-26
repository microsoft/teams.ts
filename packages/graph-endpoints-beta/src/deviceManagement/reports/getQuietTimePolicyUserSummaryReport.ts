import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport': Operation<
    '/deviceManagement/reports/getQuietTimePolicyUserSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getQuietTimePolicyUserSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
