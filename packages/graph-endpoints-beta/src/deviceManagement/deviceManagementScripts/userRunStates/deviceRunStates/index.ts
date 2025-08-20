export * as managedDevice from './managedDevice';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptUserState-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates`
 *
 * List of run states for this script across all devices of specific user.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptUserState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 * List of run states for this script across all devices of specific user.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptUserState-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates/{deviceManagementScriptDeviceState-id}',
    paramDefs: [
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptUserState-id', in: 'path' },
      { name: 'deviceManagementScriptDeviceState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/userRunStates/{deviceManagementScriptUserState-id}/deviceRunStates',
    paramDefs: [
      { name: 'deviceManagementScript-id', in: 'path' },
      { name: 'deviceManagementScriptUserState-id', in: 'path' },
    ],
    params,
    body,
  };
}
