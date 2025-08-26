import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceCompliancePolicies/validateComplianceScript': Operation<
    '/deviceManagement/deviceCompliancePolicies/validateComplianceScript',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/validateComplianceScript`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/validateComplianceScript']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/validateComplianceScript']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/validateComplianceScript']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/validateComplianceScript',
    paramDefs: [],
    params,
    body,
  };
}
