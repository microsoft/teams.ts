import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService': Operation<
    '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService',
    'post'
  >;
}

/**
 * `POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService']['body'],
  params?: IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/depOnboardingSettings/{depOnboardingSetting-id}/shareForSchoolDataSyncService',
    paramDefs: [{ name: 'depOnboardingSetting-id', in: 'path' }],
    params,
    body,
  };
}
