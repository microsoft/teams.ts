import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock`
 *
 * Bypass activation lock
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/bypassActivationLock',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
