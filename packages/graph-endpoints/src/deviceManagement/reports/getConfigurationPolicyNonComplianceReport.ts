import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyNonComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationPolicyNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
