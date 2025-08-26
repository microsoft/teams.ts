import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile`
 *
 * Default VisionOS Enrollment Profile
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/defaultVisionOSEnrollmentProfile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'depOnboardingSetting-id', in: 'path' },
    ],
    params,
  };
}
