import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDevicePoliciesComplianceReport': Operation<
    '/deviceManagement/reports/getDevicePoliciesComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDevicePoliciesComplianceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDevicePoliciesComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDevicePoliciesComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDevicePoliciesComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDevicePoliciesComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
