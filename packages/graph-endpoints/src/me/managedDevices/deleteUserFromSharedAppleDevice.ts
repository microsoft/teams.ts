import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
 *
 * Delete user from shared Apple device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
