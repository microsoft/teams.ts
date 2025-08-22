export * as detectedMalwareState from './detectedMalwareState';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 * The device protection status. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
