import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/remoteLock': Operation<
    '/me/managedDevices/{managedDevice-id}/remoteLock',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/remoteLock`
 *
 * Remote lock
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/remoteLock']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/remoteLock']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/remoteLock']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/remoteLock',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
