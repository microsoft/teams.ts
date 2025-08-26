import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/updateWindowsDeviceAccount',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
