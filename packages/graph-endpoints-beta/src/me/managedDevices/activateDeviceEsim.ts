import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/me/managedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim`
 *
 * Activate eSIM on the device.
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/activateDeviceEsim']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/activateDeviceEsim',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
