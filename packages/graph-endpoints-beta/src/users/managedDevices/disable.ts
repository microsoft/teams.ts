import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/disable': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/disable',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/disable`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/disable']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/disable']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/disable']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/disable',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
