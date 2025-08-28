import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice',
    'get'
  >;
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice`
 *
 * The managed device on which the device compliance script executed
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}/managedDevice',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceComplianceScript-id', in: 'path' },
      { name: 'deviceComplianceScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}
