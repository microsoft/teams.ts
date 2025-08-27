import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses`
 *
 * Revoke all Apple Vpp licenses for a device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
