export * as detectedMalwareState from './detectedMalwareState';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 * The device protection status. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
