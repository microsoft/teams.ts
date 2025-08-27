import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice`
 *
 * The managed devices that executes the device management script.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}/managedDevice',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}
