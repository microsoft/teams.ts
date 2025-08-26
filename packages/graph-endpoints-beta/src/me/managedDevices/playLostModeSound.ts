import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/playLostModeSound': Operation<
    '/me/managedDevices/{managedDevice-id}/playLostModeSound',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/playLostModeSound`
 *
 * Play lost mode sound
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/playLostModeSound']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/playLostModeSound']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/playLostModeSound']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/playLostModeSound',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
