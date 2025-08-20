import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim`
 *
 * Activate eSIM on the device.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/activateDeviceEsim',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
