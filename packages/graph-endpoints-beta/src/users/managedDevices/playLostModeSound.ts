import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound`
 *
 * Play lost mode sound
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/playLostModeSound',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
