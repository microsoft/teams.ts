import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile`
 *
 * Default TvOS Enrollment Profile
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultTvOSEnrollmentProfile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'depOnboardingSetting-id', in: 'path' },
    ],
    params,
  };
}
