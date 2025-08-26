export * as managedDevice from './managedDevice';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates`
 *
 * List of run states for this script across all devices.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 * List of run states for this script across all devices.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: [
      { name: 'deviceCustomAttributeShellScript-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript-id}/deviceRunStates',
    paramDefs: [{ name: 'deviceCustomAttributeShellScript-id', in: 'path' }],
    params,
    body,
  };
}
