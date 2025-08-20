import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'get'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'post'
  >;
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates`
 *
 * Results of device health scripts that ran for this device. Default is empty list. This property is read-only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
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
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceHealthScriptStates',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
