import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport': Operation<
    '/deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport',
    paramDefs: [],
    params,
    body,
  };
}
