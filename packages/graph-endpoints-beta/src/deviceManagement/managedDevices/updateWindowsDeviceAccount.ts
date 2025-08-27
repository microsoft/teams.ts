import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
