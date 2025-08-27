import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile`
 *
 * Default MacOs Enrollment Profile
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultMacOsEnrollmentProfile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'depOnboardingSetting-id', in: 'path' },
    ],
    params,
  };
}
