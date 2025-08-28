import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    'patch'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceCompliancePolicyState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
 *
 * Device compliance policy states for this device.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
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
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
 *
 * Device compliance policy states for this device.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceCompliancePolicyState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates/{deviceCompliancePolicyState-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'deviceCompliancePolicyState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/deviceCompliancePolicyStates',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
