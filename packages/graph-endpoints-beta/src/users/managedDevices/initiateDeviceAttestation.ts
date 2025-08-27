import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation`
 *
 * Perform Device Attestation
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
