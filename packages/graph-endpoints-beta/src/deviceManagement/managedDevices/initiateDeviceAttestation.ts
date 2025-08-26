import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation`
 *
 * Perform Device Attestation
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/initiateDeviceAttestation',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
