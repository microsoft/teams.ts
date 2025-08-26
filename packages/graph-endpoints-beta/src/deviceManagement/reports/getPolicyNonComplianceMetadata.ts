import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getPolicyNonComplianceMetadata': Operation<
    '/deviceManagement/reports/getPolicyNonComplianceMetadata',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getPolicyNonComplianceMetadata`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceMetadata']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceMetadata']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceMetadata']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getPolicyNonComplianceMetadata',
    paramDefs: [],
    params,
    body,
  };
}
