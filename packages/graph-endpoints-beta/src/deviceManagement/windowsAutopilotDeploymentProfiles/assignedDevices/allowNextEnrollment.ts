import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment`
 *
 * Unblocks next autopilot enrollment.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}/allowNextEnrollment',
    paramDefs: [
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
    body,
  };
}
