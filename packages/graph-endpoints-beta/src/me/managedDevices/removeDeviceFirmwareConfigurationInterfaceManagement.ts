import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement': Operation<
    '/me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement`
 *
 * Remove device from Device Firmware Configuration Interface management
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
