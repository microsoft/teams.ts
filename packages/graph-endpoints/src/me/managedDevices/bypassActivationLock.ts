import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/me/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/bypassActivationLock`
 *
 * Bypass activation lock
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/bypassActivationLock']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/bypassActivationLock']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/bypassActivationLock']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/bypassActivationLock',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
