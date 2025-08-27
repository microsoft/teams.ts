import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport': Operation<
    '/deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
