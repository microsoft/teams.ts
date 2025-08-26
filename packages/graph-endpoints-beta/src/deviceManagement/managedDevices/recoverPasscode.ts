import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode`
 *
 * Recover passcode
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/recoverPasscode',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
