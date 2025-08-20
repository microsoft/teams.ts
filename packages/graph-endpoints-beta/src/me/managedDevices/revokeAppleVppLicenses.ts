import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses': Operation<
    '/me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses`
 *
 * Revoke all Apple Vpp licenses for a device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
