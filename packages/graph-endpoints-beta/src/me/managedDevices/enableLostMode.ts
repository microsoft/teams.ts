import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/enableLostMode': Operation<
    '/me/managedDevices/{managedDevice-id}/enableLostMode',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/enableLostMode`
 *
 * Enable lost mode
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/enableLostMode']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/enableLostMode']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/enableLostMode']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/enableLostMode',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
