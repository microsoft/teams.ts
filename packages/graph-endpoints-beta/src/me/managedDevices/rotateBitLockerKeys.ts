import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys': Operation<
    '/me/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    'post'
  >;
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys`
 *
 * Rotate BitLockerKeys
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
