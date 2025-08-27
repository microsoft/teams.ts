import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/wipe': Operation<
    '/me/managedDevices/{managedDevice-id}/wipe',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/wipe`
 *
 * Wipe a device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/wipe']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/wipe']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/wipe']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/wipe',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
