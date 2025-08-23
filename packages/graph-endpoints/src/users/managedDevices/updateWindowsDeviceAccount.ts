import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
