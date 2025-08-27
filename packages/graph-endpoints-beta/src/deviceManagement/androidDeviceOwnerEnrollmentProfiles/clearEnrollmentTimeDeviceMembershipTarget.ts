import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget']['body'],
  params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}/clearEnrollmentTimeDeviceMembershipTarget',
    paramDefs: [{ name: 'androidDeviceOwnerEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}
