import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses`
 *
 * Revoke all Apple Vpp licenses for a device
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/revokeAppleVppLicenses',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
