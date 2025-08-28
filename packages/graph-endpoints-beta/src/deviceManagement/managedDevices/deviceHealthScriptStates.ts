import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'get'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'post'
  >;
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
 *
 * Results of device health scripts that ran for this device. Default is empty list. This property is read-only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
