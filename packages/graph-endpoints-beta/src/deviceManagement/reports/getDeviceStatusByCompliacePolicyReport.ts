import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport': Operation<
    '/deviceManagement/reports/getDeviceStatusByCompliacePolicyReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceStatusByCompliacePolicyReport',
    paramDefs: [],
    params,
    body,
  };
}
