import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/retire': Operation<
    '/me/managedDevices/{managedDevice-id}/retire',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/retire`
 *
 * Retire a device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/retire']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/retire']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/retire']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/retire',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
