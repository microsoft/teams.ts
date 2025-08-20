import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery': Operation<
    '/me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery`
 *
 * Perform MDM key recovery and TPM attestation
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
