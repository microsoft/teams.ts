import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'get'
  >;
  'GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'patch'
  >;
  'POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'post'
  >;
}

/**
 * `DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates`
 *
 * Device configuration states for this device.
 */
export function list(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
> {
  return {
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
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
 * `GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 * Device configuration states for this device.
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
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
 * `PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['body'],
  params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
> {
  return {
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
