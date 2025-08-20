import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice`
 *
 * Delete user from shared Apple device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deleteUserFromSharedAppleDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
