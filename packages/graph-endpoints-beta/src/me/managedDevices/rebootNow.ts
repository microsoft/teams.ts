import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/me/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/rebootNow`
 *
 * Reboot device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rebootNow']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rebootNow']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/{managedDevice-id}/rebootNow']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/rebootNow',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
