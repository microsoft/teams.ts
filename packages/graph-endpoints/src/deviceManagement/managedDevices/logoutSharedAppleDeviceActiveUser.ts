import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
 *
 * Logout shared Apple device active user
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
