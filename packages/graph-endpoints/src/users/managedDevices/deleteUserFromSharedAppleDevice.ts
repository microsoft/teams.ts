import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
 *
 * Delete user from shared Apple device
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
