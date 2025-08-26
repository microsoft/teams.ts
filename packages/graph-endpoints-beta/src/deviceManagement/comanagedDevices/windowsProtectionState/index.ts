export * as detectedMalwareState from './detectedMalwareState';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState`
 *
 * The device protection status. This property is read-only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/windowsProtectionState',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
