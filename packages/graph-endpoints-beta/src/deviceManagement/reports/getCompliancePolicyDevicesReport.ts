import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getCompliancePolicyDevicesReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyDevicesReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getCompliancePolicyDevicesReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDevicesReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDevicesReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDevicesReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getCompliancePolicyDevicesReport',
    paramDefs: [],
    params,
    body,
  };
}
