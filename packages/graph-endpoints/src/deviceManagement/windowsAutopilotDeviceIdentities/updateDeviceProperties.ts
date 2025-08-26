import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties`
 *
 * Updates properties on Autopilot devices.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}/updateDeviceProperties',
    paramDefs: [{ name: 'windowsAutopilotDeviceIdentity-id', in: 'path' }],
    params,
    body,
  };
}
