import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim`
 *
 * Activate eSIM on the device.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/activateDeviceEsim',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
