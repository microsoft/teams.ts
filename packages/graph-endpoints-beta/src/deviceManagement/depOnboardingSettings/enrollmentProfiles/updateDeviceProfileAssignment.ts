import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment',
    'post'
  >;
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/updateDeviceProfileAssignment',
    paramDefs: [
      { name: 'depOnboardingSetting-id', in: 'path' },
      { name: 'enrollmentProfile-id', in: 'path' },
    ],
    params,
    body,
  };
}
