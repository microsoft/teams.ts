import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys`
 *
 * Rotate BitLockerKeys
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/rotateBitLockerKeys',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
