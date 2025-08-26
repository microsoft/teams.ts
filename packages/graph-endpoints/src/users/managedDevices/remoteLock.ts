import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/remoteLock',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock`
 *
 * Remote lock
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/remoteLock']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/remoteLock',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
