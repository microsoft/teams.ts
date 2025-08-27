import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority',
    'post'
  >;
}

/**
 * `POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority']['body'],
  params?: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority',
    paramDefs: [{ name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}
