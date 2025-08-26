import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken']['body'],
  params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/revokeToken',
    paramDefs: [{ name: 'androidDeviceOwnerEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}
