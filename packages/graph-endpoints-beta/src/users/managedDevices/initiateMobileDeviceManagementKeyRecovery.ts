import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery`
 *
 * Perform MDM key recovery and TPM attestation
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/initiateMobileDeviceManagementKeyRecovery',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
