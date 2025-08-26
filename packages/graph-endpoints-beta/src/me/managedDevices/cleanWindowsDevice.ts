import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/me/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice`
 *
 * Clean Windows device
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/cleanWindowsDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
