import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement`
 *
 * Remove device from Device Firmware Configuration Interface management
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
