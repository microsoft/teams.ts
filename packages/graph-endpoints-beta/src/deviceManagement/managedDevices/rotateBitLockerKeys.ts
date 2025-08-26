import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys`
 *
 * Rotate BitLockerKeys
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
