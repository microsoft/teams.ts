import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules',
    paramDefs: [{ name: 'deviceCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
