import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport': Operation<
    '/deviceManagement/reports/getDevicesWithoutCompliancePolicyReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getDevicesWithoutCompliancePolicyReport',
    paramDefs: [],
    params,
    body,
  };
}
