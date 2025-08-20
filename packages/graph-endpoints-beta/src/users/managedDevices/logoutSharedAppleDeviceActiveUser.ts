import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser`
 *
 * Logout shared Apple device active user
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/logoutSharedAppleDeviceActiveUser',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
