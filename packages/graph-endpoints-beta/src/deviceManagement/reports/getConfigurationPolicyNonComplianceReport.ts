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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getConfigurationPolicyNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
