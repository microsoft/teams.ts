import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions',
    'post'
  >;
}

/**
 * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions']['body'],
  params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions',
    paramDefs: [{ name: 'deviceManagementCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
