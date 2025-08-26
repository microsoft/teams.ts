export * as managedDevice from './managedDevice';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceHealthScript-id', in: 'path' },
      { name: 'deviceHealthScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates`
 *
 * List of run states for the device health script across all devices
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}`
 *
 * List of run states for the device health script across all devices
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceHealthScript-id', in: 'path' },
      { name: 'deviceHealthScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates/{deviceHealthScriptDeviceState-id}',
    paramDefs: [
      { name: 'deviceHealthScript-id', in: 'path' },
      { name: 'deviceHealthScriptDeviceState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/deviceRunStates',
    paramDefs: [{ name: 'deviceHealthScript-id', in: 'path' }],
    params,
    body,
  };
}
