import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    'patch'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates`
 *
 * Device configuration states for this device.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 * Device configuration states for this device.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates/{deviceConfigurationState-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceConfigurationState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceConfigurationStates',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
