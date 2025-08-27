import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceCompliancePolicies/setScheduledRetireState': Operation<
    '/deviceManagement/deviceCompliancePolicies/setScheduledRetireState',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/setScheduledRetireState`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/setScheduledRetireState']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/setScheduledRetireState']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/setScheduledRetireState']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/setScheduledRetireState',
    paramDefs: [],
    params,
    body,
  };
}
