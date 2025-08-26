import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice`
 *
 * The managed device on which the device health script executed
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}/managedDevice',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthScript-id', in: 'path' },
      { name: 'deviceHealthScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}
