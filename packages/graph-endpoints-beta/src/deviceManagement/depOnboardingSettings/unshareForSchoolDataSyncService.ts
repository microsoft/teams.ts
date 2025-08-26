import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService',
    'post'
  >;
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/unshareForSchoolDataSyncService',
    paramDefs: [{ name: 'depOnboardingSetting-id', in: 'path' }],
    params,
    body,
  };
}
