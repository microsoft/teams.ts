import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation`
 *
 * Perform Device Attestation
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/initiateDeviceAttestation',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
