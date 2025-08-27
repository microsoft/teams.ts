import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceCompliancePolicies/getNoncompliantDevicesToRetire': Operation<
    '/deviceManagement/deviceCompliancePolicies/getNoncompliantDevicesToRetire',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/getNoncompliantDevicesToRetire`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/getNoncompliantDevicesToRetire']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/getNoncompliantDevicesToRetire']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/getNoncompliantDevicesToRetire']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/getNoncompliantDevicesToRetire',
    paramDefs: [],
    params,
    body,
  };
}
