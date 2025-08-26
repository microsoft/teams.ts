import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getPolicyNonComplianceReport': Operation<
    '/deviceManagement/reports/getPolicyNonComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getPolicyNonComplianceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getPolicyNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
