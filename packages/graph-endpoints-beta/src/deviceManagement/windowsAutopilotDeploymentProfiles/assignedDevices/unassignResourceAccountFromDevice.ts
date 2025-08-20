import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice`
 *
 * Unassigns the resource account from an Autopilot device.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice',
    paramDefs: [
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
    body,
  };
}
