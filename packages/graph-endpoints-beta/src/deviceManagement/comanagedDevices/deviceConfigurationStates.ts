import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'delete'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
    'get'
  >;
  'GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'get'
  >;
  'PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'patch'
  >;
  'POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates`
 *
 * Device configuration states for this device.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
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
 * `GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 * Device configuration states for this device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/{managedDevice-id}/deviceConfigurationStates',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
