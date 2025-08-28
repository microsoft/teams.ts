import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/disable': Operation<
    '/me/managedDevices/{managedDevice-id}/disable',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/disable`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/disable']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/disable']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/disable']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/disable',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
