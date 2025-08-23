import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
 *
 * Logout shared Apple device active user
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
