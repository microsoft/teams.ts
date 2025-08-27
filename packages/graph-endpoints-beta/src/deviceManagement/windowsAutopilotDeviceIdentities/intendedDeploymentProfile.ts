import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile`
 *
 * Deployment profile intended to be assigned to the Windows autopilot device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}
