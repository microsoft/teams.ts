import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram',
    'post'
  >;
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram`
 *
 * Synchronizes between Apple Device Enrollment Program and Intune
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/syncWithAppleDeviceEnrollmentProgram',
    paramDefs: [{ name: 'depOnboardingSetting-id', in: 'path' }],
    params,
    body,
  };
}
