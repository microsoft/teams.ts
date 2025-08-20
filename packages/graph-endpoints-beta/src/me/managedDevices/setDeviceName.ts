import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/setDeviceName': Operation<
    '/me/managedDevices/{managedDevice-id}/setDeviceName',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/setDeviceName`
 *
 * Set device name of the device.
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/setDeviceName']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/setDeviceName']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/setDeviceName']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/setDeviceName',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
