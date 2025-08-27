import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/users': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/users',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/users`
 *
 * The primary users associated with the managed device.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/users']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/users']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/users',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}
