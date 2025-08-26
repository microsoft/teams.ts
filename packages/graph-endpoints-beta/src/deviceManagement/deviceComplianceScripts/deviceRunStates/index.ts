export * as managedDevice from './managedDevice';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceComplianceScript-id', in: 'path' },
      { name: 'deviceComplianceScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates`
 *
 * List of run states for the device compliance script across all devices
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceComplianceScript-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}`
 *
 * List of run states for the device compliance script across all devices
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceComplianceScript-id', in: 'path' },
      { name: 'deviceComplianceScriptDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates/{deviceComplianceScriptDeviceState-id}',
    paramDefs: [
      { name: 'deviceComplianceScript-id', in: 'path' },
      { name: 'deviceComplianceScriptDeviceState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/deviceRunStates',
    paramDefs: [{ name: 'deviceComplianceScript-id', in: 'path' }],
    params,
    body,
  };
}
