import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken']['body'],
  params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/createToken',
    paramDefs: [{ name: 'androidDeviceOwnerEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}
