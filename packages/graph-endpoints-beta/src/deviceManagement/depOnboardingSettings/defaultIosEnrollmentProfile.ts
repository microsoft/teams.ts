import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile`
 *
 * Default iOS Enrollment Profile
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultIosEnrollmentProfile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'depOnboardingSetting-id', in: 'path' },
    ],
    params,
  };
}
