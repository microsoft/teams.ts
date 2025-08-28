import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/rotateFileVaultKey',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
