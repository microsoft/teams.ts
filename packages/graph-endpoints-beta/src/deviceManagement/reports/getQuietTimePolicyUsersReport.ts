import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getQuietTimePolicyUsersReport': Operation<
    '/deviceManagement/reports/getQuietTimePolicyUsersReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getQuietTimePolicyUsersReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUsersReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUsersReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUsersReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getQuietTimePolicyUsersReport',
    paramDefs: [],
    params,
    body,
  };
}
