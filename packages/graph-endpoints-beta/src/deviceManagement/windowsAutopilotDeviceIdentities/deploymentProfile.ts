import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile`
 *
 * Deployment profile currently assigned to the Windows autopilot device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/deploymentProfile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}
