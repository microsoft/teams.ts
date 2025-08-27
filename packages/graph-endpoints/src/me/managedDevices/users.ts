import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/managedDevices/{managedDevice-id}/users': Operation<
    '/me/managedDevices/{managedDevice-id}/users',
    'get'
  >;
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/users`
 *
 * The primary users associated with the managed device.
 */
export function list(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/users']['parameters']
): EndpointRequest<IEndpoints['GET /me/managedDevices/{managedDevice-id}/users']['response']> {
  return {
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/users',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}
