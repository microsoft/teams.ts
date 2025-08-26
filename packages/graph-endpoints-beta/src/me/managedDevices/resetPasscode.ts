import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/resetPasscode': Operation<
    '/me/managedDevices/{managedDevice-id}/resetPasscode',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/resetPasscode`
 *
 * Reset passcode
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/resetPasscode']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/resetPasscode']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/resetPasscode']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/resetPasscode',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
