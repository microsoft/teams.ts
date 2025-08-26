import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getDeviceNonComplianceReport': Operation<
    '/deviceManagement/reports/getDeviceNonComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getDeviceNonComplianceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getDeviceNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getDeviceNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getDeviceNonComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getDeviceNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
