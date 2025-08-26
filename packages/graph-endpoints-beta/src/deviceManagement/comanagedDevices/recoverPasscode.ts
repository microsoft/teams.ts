import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode`
 *
 * Recover passcode
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/recoverPasscode',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
