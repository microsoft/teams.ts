import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport': Operation<
    '/deviceManagement/reports/getConfigManagerDevicePolicyStatusReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigManagerDevicePolicyStatusReport',
    paramDefs: [],
    params,
    body,
  };
}
