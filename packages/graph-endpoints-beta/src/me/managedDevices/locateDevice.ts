import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/locateDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/locateDevice',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/locateDevice`
 *
 * Locate a device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/locateDevice']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/locateDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/locateDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/locateDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
