import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
 *
 * Delete user from shared Apple device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
