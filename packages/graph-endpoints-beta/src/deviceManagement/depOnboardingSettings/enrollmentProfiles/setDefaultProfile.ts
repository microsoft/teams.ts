import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile',
    'post'
  >;
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/enrollmentProfiles/{enrollmentProfile-id}/setDefaultProfile',
    paramDefs: [
      { name: 'depOnboardingSetting-id', in: 'path' },
      { name: 'enrollmentProfile-id', in: 'path' },
    ],
    params,
    body,
  };
}
