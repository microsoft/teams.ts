import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow`
 *
 * Reboot device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/rebootNow',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
