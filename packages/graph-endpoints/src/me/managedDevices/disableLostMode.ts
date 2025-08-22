import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/disableLostMode': Operation<
    '/me/managedDevices/{managedDevice-id}/disableLostMode',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/disableLostMode`
 *
 * Disable lost mode
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/disableLostMode']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/disableLostMode']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/disableLostMode']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/disableLostMode',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
