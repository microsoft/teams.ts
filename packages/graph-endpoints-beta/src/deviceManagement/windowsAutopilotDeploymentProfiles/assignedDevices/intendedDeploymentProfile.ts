import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile`
 *
 * Deployment profile intended to be assigned to the Windows autopilot device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/intendedDeploymentProfile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}
