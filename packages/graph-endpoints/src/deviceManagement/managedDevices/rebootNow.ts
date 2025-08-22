import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow`
 *
 * Reboot device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rebootNow']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/rebootNow',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
