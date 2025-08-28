import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement`
 *
 * Remove device from Device Firmware Configuration Interface management
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/removeDeviceFirmwareConfigurationInterfaceManagement',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
