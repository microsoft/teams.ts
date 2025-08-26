import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign',
    paramDefs: [{ name: 'deviceManagementCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
