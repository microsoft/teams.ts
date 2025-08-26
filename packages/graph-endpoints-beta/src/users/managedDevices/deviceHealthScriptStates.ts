import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'get'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    'post'
  >;
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
 *
 * Results of device health scripts that ran for this device. Default is empty list. This property is read-only.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
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
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceHealthScriptStates',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
