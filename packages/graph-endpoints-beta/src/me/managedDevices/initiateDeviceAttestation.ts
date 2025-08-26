import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/me/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation`
 *
 * Perform Device Attestation
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
