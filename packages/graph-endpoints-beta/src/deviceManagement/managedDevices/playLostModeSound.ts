import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound`
 *
 * Play lost mode sound
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/playLostModeSound',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
