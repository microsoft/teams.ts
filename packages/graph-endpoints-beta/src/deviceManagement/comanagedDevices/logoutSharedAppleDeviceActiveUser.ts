import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
 *
 * Logout shared Apple device active user
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
