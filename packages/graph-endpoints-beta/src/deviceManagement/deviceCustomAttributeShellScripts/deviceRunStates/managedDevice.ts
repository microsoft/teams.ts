import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice`
 *
 * The managed devices that executes the device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}
