import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/recoverPasscode': Operation<
    '/me/managedDevices/{managedDevice-id}/recoverPasscode',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/recoverPasscode`
 *
 * Recover passcode
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/recoverPasscode']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/recoverPasscode']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/recoverPasscode']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/recoverPasscode',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
