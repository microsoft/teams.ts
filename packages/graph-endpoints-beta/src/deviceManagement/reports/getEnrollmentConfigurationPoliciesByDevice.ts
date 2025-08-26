import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice': Operation<
    '/deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice',
    paramDefs: [],
    params,
    body,
  };
}
