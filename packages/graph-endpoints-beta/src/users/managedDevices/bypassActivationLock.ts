import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock`
 *
 * Bypass activation lock
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/bypassActivationLock',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
