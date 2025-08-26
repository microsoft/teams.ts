import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
