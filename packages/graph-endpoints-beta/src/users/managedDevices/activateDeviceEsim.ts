import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim`
 *
 * Activate eSIM on the device.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/activateDeviceEsim',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
