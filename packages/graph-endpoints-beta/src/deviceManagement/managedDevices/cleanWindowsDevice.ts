import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice`
 *
 * Clean Windows device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/cleanWindowsDevice',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
