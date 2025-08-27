import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice`
 *
 * Unassigns the resource account from an Autopilot device.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/unassignResourceAccountFromDevice',
    paramDefs: [{ name: 'windowsAutopilotDeviceIdentity-id', in: 'path' }],
    params,
    body,
  };
}
