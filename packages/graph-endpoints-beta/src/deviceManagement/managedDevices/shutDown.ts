import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/shutDown',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown`
 *
 * Shut down device
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/shutDown']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/shutDown',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
